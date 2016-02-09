var
should = require("should"),
_buildConditionGroups = require("../../lib/_buildConditionGroups"),
_ = require("lodash"),
rangeConditionsTestData = _.cloneDeep(require("../testData/rangeConditions/tests"));

describe("Range Conditions", function() {
  rangeConditionsTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var conditionGroupsMap = _buildConditionGroups(test.entities);
      conditionGroupsMap.should.be.eql(test.conditionGroupsMap);
    });
  });
});
