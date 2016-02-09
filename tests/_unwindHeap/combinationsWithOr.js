var
should = require("should"),
_createConditionGroupsHeap = require("../../lib/_createConditionGroupsHeap"),
_unwindHeap = require("../../lib/_unwindHeap"),
_ = require("lodash"),
combinationsWithOrTestData = _.cloneDeep(require("../testData/combinationsWithOr/tests"));

describe("Combinations with or", function() {
  combinationsWithOrTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var meta = _unwindHeap(_createConditionGroupsHeap(test.conditionGroups));
      meta.should.be.eql(test.meta);
    });
  });
});
