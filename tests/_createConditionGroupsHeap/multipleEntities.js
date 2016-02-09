var
should = require("should"),
_createConditionGroupsHeap = require("../../lib/_createConditionGroupsHeap"),
_ = require("lodash"),
multipleEntitiesTestData = _.cloneDeep(require("../testData/multipleEntities/tests"));

describe("Multiple Entities", function() {
  multipleEntitiesTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var heap = _createConditionGroupsHeap(test.conditionGroups);
      test.conditionGroups.forEach(function(conditionGroup) {
        delete conditionGroup.keysHeapElements;
      });
      heap.nodes.should.be.eql(test.heap);
    });
  });
});
