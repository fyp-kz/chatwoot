<script setup>
import '@chatwoot/ninja-keys';
import { ref, toRef, computed, watch, watchEffect, onMounted } from 'vue';
import { useStore } from 'dashboard/composables/store';
import { useTrack } from 'dashboard/composables';
import { useI18n } from 'vue-i18n';
import { useLocale } from 'shared/composables/useLocale';
import { useAppearanceHotKeys } from 'dashboard/composables/commands/useAppearanceHotKeys';
import { useInboxHotKeys } from 'dashboard/composables/commands/useInboxHotKeys';
import { useGoToCommandHotKeys } from 'dashboard/composables/commands/useGoToCommandHotKeys';
import { useBulkActionsHotKeys } from 'dashboard/composables/commands/useBulkActionsHotKeys';
import { useConversationHotKeys } from 'dashboard/composables/commands/useConversationHotKeys';
import { useMacroHotKeys } from 'dashboard/composables/commands/useMacroHotKeys';
import ConversationResolveAttributesModal from 'dashboard/components-next/ConversationWorkflow/ConversationResolveAttributesModal.vue';
import wootConstants from 'dashboard/constants/globals';
import {
  GENERAL_EVENTS,
  SNOOZE_EVENTS,
} from 'dashboard/helper/AnalyticsHelper/events';
import { generateSnoozeSuggestions } from 'dashboard/helper/snoozeHelpers';
import { ICON_SNOOZE_CONVERSATION } from 'dashboard/helper/commandbar/icons';
import {
  CMD_SNOOZE_CONVERSATION,
  CMD_SNOOZE_NOTIFICATION,
  CMD_BULK_ACTION_SNOOZE_CONVERSATION,
} from 'dashboard/helper/commandbar/events';
import { emitter } from 'shared/helpers/mitt';

const props = defineProps({
  isPaywalled: {
    type: Boolean,
    default: false,
  },
});

const store = useStore();
const { t, tm } = useI18n();
const { resolvedLocale } = useLocale();

const ninjakeys = ref(null);
const resolveAttributesModalRef = ref(null);

// Added selectedSnoozeType to track the selected snooze type
// So if the selected snooze type is "custom snooze" then we set selectedSnoozeType with the CMD action id
// So that we can track the selected snooze type and when we close the command bar
const selectedSnoozeType = ref(null);

const { goToAppearanceHotKeys } = useAppearanceHotKeys();
const { inboxHotKeys } = useInboxHotKeys();
const { goToCommandHotKeys } = useGoToCommandHotKeys(
  toRef(props, 'isPaywalled')
);
const { bulkActionsHotKeys } = useBulkActionsHotKeys();
const { conversationHotKeys } = useConversationHotKeys();
const {
  macroHotKeys,
  pendingAttributes,
  submitPendingAttributes,
  dismissPendingAttributes,
} = useMacroHotKeys();

watch(pendingAttributes, pending => {
  if (pending) {
    resolveAttributesModalRef.value?.open(
      pending.missing,
      pending.customAttributes
    );
  }
});

const SNOOZE_PARENT_IDS = [
  'snooze_conversation',
  'snooze_notification',
  'bulk_action_snooze_conversation',
];
const DYNAMIC_SNOOZE_PREFIX = 'dynamic_snooze_';

const CUSTOM_SNOOZE = wootConstants.SNOOZE_OPTIONS.UNTIL_CUSTOM_TIME;

const dynamicSnoozeActions = ref([]);
const currentCommandRoot = ref(null);

const placeholder = computed(() =>
  SNOOZE_PARENT_IDS.includes(currentCommandRoot.value)
    ? t('COMMAND_BAR.SNOOZE_PLACEHOLDER')
    : t('COMMAND_BAR.SEARCH_PLACEHOLDER')
);

const SNOOZE_PRESET_IDS = new Set(Object.values(wootConstants.SNOOZE_OPTIONS));

const hotKeys = computed(() => {
  if (props.isPaywalled) {
    return [...goToAppearanceHotKeys.value, ...goToCommandHotKeys.value];
  }

  const allActions = [
    ...dynamicSnoozeActions.value,
    ...inboxHotKeys.value,
    ...goToCommandHotKeys.value,
    ...goToAppearanceHotKeys.value,
    ...bulkActionsHotKeys.value,
    ...conversationHotKeys.value,
    ...macroHotKeys.value,
  ];
  // When dynamic NLP snooze suggestions exist, hide all preset snooze actions to avoid duplication
  if (!dynamicSnoozeActions.value.length) return allActions;
  return allActions.filter(
    a => !SNOOZE_PRESET_IDS.has(a.id) || !SNOOZE_PARENT_IDS.includes(a.parent)
  );
});

const setCommandBarData = () => {
  ninjakeys.value.data = hotKeys.value;
};

const SNOOZE_EVENT_MAP = {
  snooze_conversation: CMD_SNOOZE_CONVERSATION,
  snooze_notification: CMD_SNOOZE_NOTIFICATION,
  bulk_action_snooze_conversation: CMD_BULK_ACTION_SNOOZE_CONVERSATION,
};

const SNOOZE_SECTION_MAP = {
  snooze_conversation: 'COMMAND_BAR.SECTIONS.SNOOZE_CONVERSATION',
  snooze_notification: 'COMMAND_BAR.SECTIONS.SNOOZE_NOTIFICATION',
  bulk_action_snooze_conversation: 'COMMAND_BAR.SECTIONS.BULK_ACTIONS',
};

const snoozeTranslations = computed(() => {
  const raw = tm('SNOOZE_PARSER');
  if (!raw || typeof raw !== 'object') return {};
  return JSON.parse(JSON.stringify(raw));
});

const buildDynamicSnoozeActions = (search, parentId) => {
  const suggestions = generateSnoozeSuggestions(search, new Date(), {
    translations: snoozeTranslations.value,
    locale: resolvedLocale.value,
  });
  if (!suggestions.length) return [];

  const busEvent = SNOOZE_EVENT_MAP[parentId];
  const section = t(SNOOZE_SECTION_MAP[parentId]);

  return suggestions.map((parsed, index) => ({
    id: `${DYNAMIC_SNOOZE_PREFIX}${index}`,
    title:
      parsed.label !== parsed.formattedDate
        ? `${parsed.label} - ${parsed.formattedDate}`
        : parsed.formattedDate,
    parent: parentId,
    section,
    icon: ICON_SNOOZE_CONVERSATION,
    keywords: search,
    handler: () => {
      emitter.emit(busEvent, parsed.resolve());
      useTrack(SNOOZE_EVENTS.NLP_SNOOZE_APPLIED, { label: parsed.label });
    },
  }));
};

const resetSnoozeState = () => {
  currentCommandRoot.value = null;
  dynamicSnoozeActions.value = [];
};

const patchNinjaKeysOpenClose = el => {
  if (!el || typeof el.open !== 'function' || typeof el.close !== 'function') {
    return;
  }

  const originalOpen = el.open.bind(el);
  const originalClose = el.close.bind(el);

  el.open = (...args) => {
    const [options = {}] = args;
    currentCommandRoot.value = options.parent || null;
    dynamicSnoozeActions.value = [];
    return originalOpen(...args);
  };

  el.close = (...args) => {
    resetSnoozeState();
    return originalClose(...args);
  };
};

const onSelected = item => {
  const {
    detail: {
      action: { title = null, section = null, id = null, children = null } = {},
    } = {},
  } = item;

  selectedSnoozeType.value = id === CUSTOM_SNOOZE ? id : null;

  if (Array.isArray(children) && children.length) {
    currentCommandRoot.value = id;
  }

  useTrack(GENERAL_EVENTS.COMMAND_BAR, { section, action: title });
  setCommandBarData();
};

const onCommandBarChange = item => {
  const { detail: { search = '', actions = [] } = {} } = item;
  const normalizedSearch = search.trim();

  if (actions.length > 0) {
    const uniqueParents = [
      ...new Set(actions.map(action => action.parent).filter(Boolean)),
    ];
    if (uniqueParents.length === 1) {
      currentCommandRoot.value = uniqueParents[0];
    } else {
      currentCommandRoot.value = null;
    }
  }

  if (
    !normalizedSearch ||
    !SNOOZE_PARENT_IDS.includes(currentCommandRoot.value || '')
  ) {
    dynamicSnoozeActions.value = [];
    return;
  }

  dynamicSnoozeActions.value = buildDynamicSnoozeActions(
    normalizedSearch,
    currentCommandRoot.value
  );
};

const onClosed = () => {
  if (selectedSnoozeType.value !== CUSTOM_SNOOZE) {
    store.dispatch('setContextMenuChatId', null);
  }
  resetSnoozeState();
};

watchEffect(() => {
  if (ninjakeys.value) {
    ninjakeys.value.data = hotKeys.value;
  }
});

onMounted(() => {
  setCommandBarData();
  patchNinjaKeysOpenClose(ninjakeys.value);
});
</script>

<!-- eslint-disable vue/attribute-hyphenation, vue/no-deprecated-slot-attribute -->
<template>
  <ninja-keys
    ref="ninjakeys"
    noAutoLoadMdIcons
    hideBreadcrumbs
    :placeholder="placeholder"
    @change="onCommandBarChange"
    @selected="onSelected"
    @closed="onClosed"
  >
    <div
      slot="footer"
      class="flex items-center [border-top:var(--ninja-separate-border)] bg-[var(--ninja-footer-background)] px-4 py-2 text-[color:var(--ninja-secondary-text-color)]"
    >
      <span class="me-[1em] flex items-center text-[0.75em]">
        <svg
          version="1.0"
          class="me-2 h-[1.25em] w-[1.25em] rounded-[var(--ninja-key-border-radius)] bg-[var(--ninja-secondary-background-color)] fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 1280"
        >
          <path
            d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
          />
        </svg>
        {{ t('COMMAND_BAR.FOOTER.SELECT') }}
      </span>
      <span class="me-[1em] flex items-center text-[0.75em]">
        <svg
          class="me-2 h-[1.25em] w-[1.25em] rounded-[var(--ninja-key-border-radius)] bg-[var(--ninja-secondary-background-color)] fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
        </svg>
        <svg
          class="me-2 h-[1.25em] w-[1.25em] rounded-[var(--ninja-key-border-radius)] bg-[var(--ninja-secondary-background-color)] fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
        </svg>
        {{ t('COMMAND_BAR.FOOTER.NAVIGATE') }}
      </span>
      <span class="me-[1em] flex items-center text-[0.75em]">
        <span
          class="me-2 rounded-[var(--ninja-key-border-radius)] bg-[var(--ninja-secondary-background-color)] px-[0.25em] py-[0.06em] text-[1.1em]"
          >esc</span
        >
        {{ t('COMMAND_BAR.FOOTER.CLOSE') }}
      </span>
      <span class="flex items-center text-[0.75em]">
        <svg
          class="me-2 h-[1.25em] w-[1.25em] rounded-[var(--ninja-key-border-radius)] bg-[var(--ninja-secondary-background-color)] fill-current opacity-70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
            clip-rule="evenodd"
          />
        </svg>
        {{ t('COMMAND_BAR.FOOTER.MOVE_TO_PARENT') }}
      </span>
    </div>
  </ninja-keys>
  <ConversationResolveAttributesModal
    ref="resolveAttributesModalRef"
    @submit="submitPendingAttributes"
    @close="dismissPendingAttributes"
  />
</template>

<style lang="scss">
ninja-keys {
  --ninja-accent-color: rgba(39, 129, 246, 1);
  --ninja-font-family: 'Inter';
  z-index: 9999;
}

// Wrapped with body.dark to avoid overriding the default theme
// If OS is in dark theme and app is in light mode, It will prevent showing dark theme in command bar
body.dark {
  ninja-keys {
    --ninja-overflow-background: rgba(26, 29, 30, 0.5);
    --ninja-modal-background: #151718;
    --ninja-secondary-background-color: #26292b;
    --ninja-selected-background: #26292b;
    --ninja-footer-background: #2b2f31;
    --ninja-text-color: #f8faf9;
    --ninja-icon-color: #f8faf9;
    --ninja-secondary-text-color: #c2c9c6;
  }
}
</style>
