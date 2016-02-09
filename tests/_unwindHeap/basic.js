var
should = require("should"),
_createConditionGroupsHeap = require("../../lib/_createConditionGroupsHeap"),
_unwindHeap = require("../../lib/_unwindHeap"),
_ = require("lodash"),
basicTestData = _.cloneDeep(require("../testData/basic/tests"));

describe("Basic Conditions", function() {
  basicTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var meta = _unwindHeap(_createConditionGroupsHeap(test.conditionGroups));
      meta.should.be.eql(test.meta);
    });
  });
});
