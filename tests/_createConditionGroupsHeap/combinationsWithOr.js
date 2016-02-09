var
should = require("should"),
_createConditionGroupsHeap = require("../../lib/_createConditionGroupsHeap"),
_ = require("lodash"),
combinationsWithOrTestData = _.cloneDeep(require("../testData/combinationsWithOr/tests"));

describe("Combinations with or", function() {
  combinationsWithOrTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var heap = _createConditionGroupsHeap(test.conditionGroups);
      test.conditionGroups.forEach(function(conditionGroup) {
        delete conditionGroup.keysHeapElements;
      });
      heap.nodes.should.be.eql(test.heap);
    });
  });
});
