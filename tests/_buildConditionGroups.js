var
should = require("should"),
glob = require("glob"),
files = glob.sync(__dirname + "/_buildConditionGroups/*.js");

describe("Build Condition Groups", function() {
  files.forEach(function(file) {
    require(file);
  });
});
