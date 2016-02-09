var
should = require("should"),
CheckCondition = require("../../lib/CheckCondition"),
_ = require("lodash"),
rangeConditionsTestData = _.cloneDeep(require("../testData/rangeConditions/tests"));

describe("Range Conditions", function() {
  rangeConditionsTestData.forEach(function(test, i) {
    describe(i + ". " + test.title, function() {
      test.conditionCheckTests.forEach(function(conditionCheckTest, j) {
        it(conditionCheckTest.title, function() {
          var
          entitiesInCallback = [],
          checkCondition = new CheckCondition(test.entities, test.targets);
          checkCondition.check(test.targetId, conditionCheckTest.data, function(entity) {
            entitiesInCallback.push(entity);
            return conditionCheckTest.acceptAt === entity;
          });
          entitiesInCallback.should.be.eql(conditionCheckTest.entities);
        });
      });
    });
  });
});
