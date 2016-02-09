var
should = require("should"),
_buildConditionGroups = require("../../lib/_buildConditionGroups"),
_ = require("lodash"),
combinationsWithAndTestData = _.cloneDeep(require("../testData/combinationsWithAnd/tests"));

describe("Combinations with and", function() {
  combinationsWithAndTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var conditionGroupsMap = _buildConditionGroups(test.entities);
      conditionGroupsMap.should.be.eql(test.conditionGroupsMap);
    });
  });
});
