var
_ = require("lodash"),

_buildConditionMetaMap = require("./_buildConditionMetaMap"),

_processConditionEndpoints = function(conditionEndpoints, data, conditionMatchCallback) {
  return conditionEndpoints.some(function(conditionEndpoint, data) {
    return conditionMatchCallback(conditionEndpoint);
  }, this);
},

_checkArray = function(conditionMetaArray, value, l, h, data, conditionMatchCallback) {
  if(l > h) {
    if(l < conditionMetaArray.length) {
      //return the list inside 'less than' of conditionMetaArray[l]
      return _check(conditionMetaArray[l][1][0], data, conditionMatchCallback);
    }
    if(h >= 0) {
      //return the list inside 'greater than' of conditionMetaArray[h]
      return _check(conditionMetaArray[h][1][2], data, conditionMatchCallback);
    }
    return false;
  }

  var m = Math.floor((l + h) / 2);

  if(conditionMetaArray[m][0] === value) {
    //return the list inside 'equals' part
    return _check(conditionMetaArray[m][1][1], data, conditionMatchCallback);
  }
  else if(conditionMetaArray[m][0] > value) {
    return _checkArray(conditionMetaArray, value, l, m - 1, data, conditionMatchCallback);
  }
  else {
    return _checkArray(conditionMetaArray, value, m + 1, h, data, conditionMatchCallback);
  }
},

_check = function(conditionMeta, data, conditionMatchCallback) {
  if(_.isArray(conditionMeta)) {
    if(_processConditionEndpoints(conditionMeta, data, conditionMatchCallback)) {
      return true;
    }
  }
  else {
    if(conditionMeta.endPoints) {
      if(_processConditionEndpoints(conditionMeta.endPoints, data, conditionMatchCallback)) {
        return true;
      }
    }
    if(conditionMeta.key) {
      var value = data[conditionMeta.key];
      if(_.isArray(conditionMeta.values)) {
        return _checkArray(conditionMeta.values, value, 0, conditionMeta.values.length - 1, data, conditionMatchCallback);
      }
      else {
        if(conditionMeta.values[value] !== undefined) {
          return _check(conditionMeta.values[value], data, conditionMatchCallback);
        }
        else if(conditionMeta.values.__default__ !== undefined) {
          return _check(conditionMeta.values.__default__, data, conditionMatchCallback);
        }
      }
    }
  }
  return false;
};

/**
 * A class with condition check apis.
 *
 * @class CheckCondition
 * @constructor
 * @param entities {Object} A map of all entities with entityIds as keys. Each value should have a 'condition' block.
 * @param targets {Array} An array of target objects with atleast a targetId and a list of entities in the target.
 */
function CheckCondition(entities, targets) {
  var conditionMetaMap = _buildConditionMetaMap(entities, targets);

  /**
   * @method check
   * @param targetId {String} The target id to check condition for.
   * @param data {Object} The data object where all the values for conditions are.
   * @param conditionMatchCallback {Function} A function which is called when an entity matches for the target. Recieves the entitiyId and 'data'. It should return whether to accept the entity or not.
   * @return {Boolean} True if any entity was accepted.
   */
  this.check = function(targetId, data, conditionMatchCallback) {
    if(conditionMetaMap[targetId]) {
      return _check(conditionMetaMap[targetId].meta, data, conditionMatchCallback);
    }
    return false;
  };
};

module.exports = CheckCondition;
