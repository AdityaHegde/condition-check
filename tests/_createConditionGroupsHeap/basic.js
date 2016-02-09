var
should = require("should"),
_createConditionGroupsHeap = require("../../lib/_createConditionGroupsHeap"),
_ = require("lodash"),
basicTestData = _.cloneDeep(require("../testData/basic/tests"));

describe("Basic Conditions", function() {
  basicTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var heap = _createConditionGroupsHeap(test.conditionGroups);
      test.conditionGroups.forEach(function(conditionGroup) {
        delete conditionGroup.keysHeapElements;
      });
      heap.nodes.should.be.eql(test.heap);
    });
  });
});
