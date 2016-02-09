var
should = require("should"),
_buildConditionGroups = require("../../lib/_buildConditionGroups"),
_ = require("lodash"),
basicTestData = _.cloneDeep(require("../testData/basic/tests"));

describe("Basic Conditions", function() {
  basicTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var conditionGroupsMap = _buildConditionGroups(test.entities);
      conditionGroupsMap.should.be.eql(test.conditionGroupsMap);
    });
  });
});
