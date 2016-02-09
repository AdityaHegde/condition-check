var
should = require("should"),
_createConditionGroupsHeap = require("../../lib/_createConditionGroupsHeap"),
_unwindHeap = require("../../lib/_unwindHeap"),
_ = require("lodash"),
multipleEntitiesTestData = _.cloneDeep(require("../testData/multipleEntities/tests"));

describe("Multiple Entities", function() {
  multipleEntitiesTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var meta = _unwindHeap(_createConditionGroupsHeap(test.conditionGroups));
      meta.should.be.eql(test.meta);
    });
  });
});
