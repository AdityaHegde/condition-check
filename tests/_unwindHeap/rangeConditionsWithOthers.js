var
should = require("should"),
_createConditionGroupsHeap = require("../../lib/_createConditionGroupsHeap"),
_unwindHeap = require("../../lib/_unwindHeap"),
_ = require("lodash"),
rangeConditionsWithOthersTestData = _.cloneDeep(require("../testData/rangeConditionsWithOthers/tests"));

describe("Range Conditions With Other Conditions", function() {
  rangeConditionsWithOthersTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var meta = _unwindHeap(_createConditionGroupsHeap(test.conditionGroups));
      meta.should.be.eql(test.meta);
    });
  });
});
