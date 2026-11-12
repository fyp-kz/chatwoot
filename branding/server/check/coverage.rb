require 'coverage'
require 'json'
Coverage.start(lines: true, branches: true)
at_exit do
  overlay = Coverage.result.select { |path, _| path.include?('/jeli/') || path.include?('jeli_profile_deletion') }
  File.write('/tmp/b0-coverage.json', JSON.pretty_generate(overlay))
end
