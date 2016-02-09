var
should = require("should"),
_buildConditionGroups = require("../../lib/_buildConditionGroups"),
_ = require("lodash"),
multipleEntitiesTestData = _.cloneDeep(require("../testData/multipleEntities/tests"));

describe("Multiple Entities", function() {
  multipleEntitiesTestData.forEach(function(test, i) {
    it(i + ". " + test.title, function() {
      var conditionGroupsMap = _buildConditionGroups(test.entities);
      conditionGroupsMap.should.be.eql(test.conditionGroupsMap);
    });
  });
});
