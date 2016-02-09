var

_buildConditionGroups = require("./_buildConditionGroups"),

_createConditionGroupsHeap = require("./_createConditionGroupsHeap"),

_unwindHeap = require("./_unwindHeap");

module.exports = function(entities, targets) {
  var
  conditionGroupsMap = _buildConditionGroups(entities),
  entitiesTargetsCache = {},
  conditionsMetaMap = {};

  targets.forEach(function(target) {
    var
    entitiesKey = target.entities.join("__");
    if(!entitiesTargetsCache[entitiesKey]) {
      var conditionGroupsForTarget = [];
      target.entities.forEach(function(entity) {
        conditionGroupsForTarget.push.apply(conditionGroupsForTarget, conditionGroupsMap[entity]);
      });
      entitiesTargetsCache[entitiesKey] = _unwindHeap(_createConditionGroupsHeap(conditionGroupsForTarget));
    }
    conditionsMetaMap[target.targetId] = {
      target : target,
      meta   : entitiesTargetsCache[entitiesKey],
    };
  });

  return conditionsMetaMap;
};
