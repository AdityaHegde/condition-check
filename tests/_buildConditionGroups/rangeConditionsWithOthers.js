var
should = require("should"),
_buildConditionGroups = require("../../lib/_buildConditionGroups"),
_ = require("lodash"),
rangeConditionsWithOthersTestData = _.cloneDeep(require("../testData/rangeConditionsWithOthers/tests"));

describe("Range Conditions With Other Conditions", function() {
  rangeConditionsWithOthersTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var conditionGroupsMap = _buildConditionGroups(test.entities);
      conditionGroupsMap.should.be.eql(test.conditionGroupsMap);
    });
  });
});
