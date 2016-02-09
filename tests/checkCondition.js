var
should = require("should"),
glob = require("glob"),
files = glob.sync(__dirname + "/checkCondition/*.js");

describe("Check Condition Tests", function() {
  files.forEach(function(file) {
    require(file);
  });
});
