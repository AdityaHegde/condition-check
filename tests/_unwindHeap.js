var
should = require("should"),
glob = require("glob"),
files = glob.sync(__dirname + "/_unwindHeap/*.js");

describe("Unwind Condition Groups Heap", function() {
  files.forEach(function(file) {
    require(file);
  });
});
