var
should = require("should"),
_buildConditionGroups = require("../../lib/_buildConditionGroups"),
_ = require("lodash"),
combinationsWithOrTestData = _.cloneDeep(require("../testData/combinationsWithOr/tests"));

describe("Combinations with or", function() {
  combinationsWithOrTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var conditionGroupsMap = _buildConditionGroups(test.entities);
      conditionGroupsMap.should.be.eql(test.conditionGroupsMap);
    });
  });
});
