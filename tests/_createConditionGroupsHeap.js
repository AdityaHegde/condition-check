var
should = require("should"),
glob = require("glob"),
files = glob.sync(__dirname + "/_createConditionGroupsHeap/*.js");

describe("Create Condition Groups Heap", function() {
  files.forEach(function(file) {
    require(file);
  });
});
