var
should = require("should"),
_createConditionGroupsHeap = require("../../lib/_createConditionGroupsHeap"),
_ = require("lodash"),
rangeConditionsWithOthersTestData = _.cloneDeep(require("../testData/rangeConditionsWithOthers/tests"));

describe("Range Conditions With Other Conditions", function() {
  rangeConditionsWithOthersTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var heap = _createConditionGroupsHeap(test.conditionGroups);
      test.conditionGroups.forEach(function(conditionGroup) {
        delete conditionGroup.keysHeapElements;
      });
      heap.nodes.should.be.eql(test.heap);
    });
  });
});
