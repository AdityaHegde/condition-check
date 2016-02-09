var
_heapComparator = require("./_heapComparator"),
Heap = require("heap"),
_ = require("lodash"),

_copyHeap = function(heap) {
  var _heap = new Heap(_heapComparator);
  _heap.nodes = _.cloneDeep(heap.nodes);
  return _heap;
},

_processHeapForValue = function(keysHeap, valuesIdxMap, entitiesHit, conditionGroupsAdded) {
  var
  keyElement = keysHeap.pop(),
  elementsToModify = {};

  keyElement.conditionGroups.forEach(function(conditionGroup) {
    if(valuesIdxMap[conditionGroup.idx] === 1) {
      if(conditionGroup.keysCount > 0 && entitiesHit[conditionGroup.entityId] === undefined) {
        conditionGroup.keysCount--;
        conditionGroupsAdded++;

        if(conditionGroup.keysCount === 0) {
          //console.log(conditionGroup);
          keysHeap.push({
            idx : conditionGroup.idx,
            weight : 0,
            conditionGroup : conditionGroup,
          });
        }
      }
    }
    else {
      conditionGroup.keysCount = 0;
      conditionGroup.keysHeapElements.forEach(function(_keyElement) {
        if(_keyElement !== keyElement) {
          elementsToModify[_keyElement.key] = _keyElement;
          _keyElement.weight--;
        }
      });
    }
  });

  //no method to remove an element not on top
  //so just update with 0 weight
  Object.keys(elementsToModify).forEach(function(key) {
    keysHeap.updateItem(elementsToModify[key]);
  });

  return conditionGroupsAdded;
},

_unwindHeap = function(keysHeap, entitiesHit) {
  entitiesHit = entitiesHit || {};
  var
  retObj = {};

  while(keysHeap.size() > 0) {
    var keyElement = keysHeap.peek();

    if(keyElement.conditionGroup !== undefined) {
      if(entitiesHit[keyElement.conditionGroup.entityId] === undefined) {
        retObj.endPoints = retObj.endPoints || [];
        retObj.endPoints.push(keyElement.conditionGroup.entityId);
        entitiesHit[keyElement.conditionGroup.entityId] = 1;
      }
    }
    else if(keyElement.weight > 0) {
      retObj.key = keyElement.key;
      retObj.values = {};

      var conditionGroupsAdded = 0;

      if(_.isArray(keyElement.values)) {
        retObj.values = [];
        keyElement.values.forEach(function(rangeArrayElement) {
          var retObjRangeArrayElement = [
            rangeArrayElement[0],
            [ [], [], [] ],
          ];
          rangeArrayElement[1].forEach(function(rangeConditionGroups, i) {
            var _keysHeap = _copyHeap(keysHeap);
            conditionGroupsAdded = _processHeapForValue(_keysHeap, keyElement.valuesIdxMap[rangeArrayElement[0]][i], entitiesHit, conditionGroupsAdded);

            retObjRangeArrayElement[1][i] = _unwindHeap(_keysHeap, _.clone(entitiesHit));
          });
          retObj.values.push(retObjRangeArrayElement);
        });
      }
      else {
        Object.keys(keyElement.values).forEach(function(value) {
          var _keysHeap = _copyHeap(keysHeap);
          conditionGroupsAdded = _processHeapForValue(_keysHeap, keyElement.valuesIdxMap[value], entitiesHit, conditionGroupsAdded);

          retObj.values[value] = _unwindHeap(_keysHeap, _.clone(entitiesHit));
          if(value === "__default__" && retObj.values[value].length === 0) {
            delete retObj.values[value];
          }
        });
      }

      if(conditionGroupsAdded === 0) {
        break;
      }
      return retObj;
    }

    keysHeap.pop();
  }

  return retObj.endPoints || [];
};

module.exports = _unwindHeap;
