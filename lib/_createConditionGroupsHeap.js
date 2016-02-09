var
Heap = require("heap"),
_heapComparator = require("./_heapComparator"),
_ = require("lodash"),

_addToRangeArrayElement = function(rangeArrayElement, rangeValue, rangeType, keyElement, conditionGroups) {
  //0th index is for less (2nd bit), 1st index is for equal (1st bit), 2nd index is for greater (0th bit)
  keyElement.valuesIdxMap[rangeValue] = keyElement.valuesIdxMap[rangeValue] || [ {}, {}, {} ];
  for(var i = 0, j = 4; i < 3; i++, j /= 2) {
    if((rangeType & j) === j) {
      conditionGroups.forEach(function(conditionGroup) {
        rangeArrayElement[1][i].push(conditionGroup);
        keyElement.valuesIdxMap[rangeValue][i][conditionGroup.idx] = 1;
      });
    }
  }
},

_addToRangeArray = function(rangeArray, newRangeArray, keyElement, newConditionGroup) {
  var i = 0, j = 0,
  _addNewRangeArrayElement = function() {
    var newRangeArrayElement = [ newRangeArray[j][0], [ [], [], [] ] ];
    if(i - 1 >= 0) {
      if(rangeArray[i - 1][1][2].length > 0) {
        var toAddConditionGroups = rangeArray[i - 1][1][2].slice();
        if(keyElement.valuesIdxMap[rangeArray[i - 1][0]][2][newConditionGroup.idx] === 1) {
          toAddConditionGroups.pop();
        }
        _addToRangeArrayElement(newRangeArrayElement, newRangeArray[j][0], 7, keyElement, toAddConditionGroups);
      }
    }
    else if(i < rangeArray.length) {
      if(rangeArray[i][1][0].length > 0) {
        _addToRangeArrayElement(newRangeArrayElement, newRangeArray[j][0], 7, keyElement, rangeArray[i][1][0]);
      }
    }
    _addToRangeArrayElement(newRangeArrayElement, newRangeArray[j][0], newRangeArray[j][1], keyElement, [newConditionGroup]);
    rangeArray.splice(i, 0, newRangeArrayElement);
  };
  while(i < rangeArray.length && j < newRangeArray.length) {
    if(rangeArray[i][0] < newRangeArray[j][0]) {
      if((newRangeArray[j][1] & 4) === 4) {
        _addToRangeArrayElement(rangeArray[i], rangeArray[i][0], 7, keyElement, [newConditionGroup]);
      }
    }
    else if(rangeArray[i][0] === newRangeArray[j][0]) {
      _addToRangeArrayElement(rangeArray[i], rangeArray[i][0], newRangeArray[j][1], keyElement, [newConditionGroup]);
      j++;
    }
    else {
      _addNewRangeArrayElement();

      j++;
    }

    i++;
  }

  if(j - 1 >= 0 && (newRangeArray[j - 1][1] & 1) === 1) {
    for(i; i < rangeArray.length; i++) {
      _addToRangeArrayElement(rangeArray[i], rangeArray[i][0], 7, keyElement, [newConditionGroup]);
    }
  }

  for(j; j < newRangeArray.length; j++, i++) {
    _addNewRangeArrayElement();
  }
},

_addConditionGroupToRangeArray = function(rangeArray, keyElement, conditionGroup) {
  var values = [];
  if(_.isPlainObject(conditionGroup.keys[keyElement.key])) {
    Object.keys(conditionGroup.keys[keyElement.key]).map(function(a) {
      return Number(a);
    }).sort(function(a, b) {
      return a - b;
    }).forEach(function(value) {
      if(!keyElement.valuesIdxMap[value] || !_.isArray(keyElement.valuesIdxMap[value])) {
        keyElement.valuesIdxMap[value] = [ {}, {}, {} ];
      }
      values.push([value, 5]);
    });
  }
  else {
    var value = conditionGroup.keys[keyElement.key];
    if(!_.isArray(keyElement.valuesIdxMap[value])) {
      keyElement.valuesIdxMap[value] = [ {}, {}, {} ];
    }
    values.push([value, 2]);
  }
  _addToRangeArray(rangeArray, values, keyElement, conditionGroup);
};

module.exports = function(conditionGroups) {
  var
  keysHeap = new Heap(_heapComparator),
  keyToHeapElement = {};

  conditionGroups.forEach(function(conditionGroup, i) {
    conditionGroup.keysCount = 0;
    conditionGroup.idx = i;
    conditionGroup.keysHeapElements = [];

    for(var key in conditionGroup.keys) {
      conditionGroup.keysCount++;

      var insert = 0;
      if(!keyToHeapElement[key]) {
        keyToHeapElement[key] = {
          key    : key,
          idx    : i,
          weight : 0,
          values : {},
          valuesIdxMap : {},
          conditionGroups : [],
        };
        insert = 1;
      }

      if(_.isArray(conditionGroup.keys[key])) {
        if(!_.isArray(keyToHeapElement[key].values)) {
          var _values = [];

          keyToHeapElement[key].conditionGroups.forEach(function(conditionGroup) {
            _addConditionGroupToRangeArray(_values, keyToHeapElement[key], conditionGroup);
          });

          keyToHeapElement[key].values = _values;
          delete keyToHeapElement[key].valuesIdxMap.__default__;
        }

        _addToRangeArray(keyToHeapElement[key].values, conditionGroup.keys[key], keyToHeapElement[key], conditionGroup);
      }
      else if(_.isArray(keyToHeapElement[key].values)) {
        _addConditionGroupToRangeArray(keyToHeapElement[key].values, keyToHeapElement[key], conditionGroup);
      }
      else {
        var
        valueKey = _.isPlainObject(conditionGroup.keys[key]) ? "__default__" : conditionGroup.keys[key],
        newValues = [valueKey];

        if(_.isPlainObject(conditionGroup.keys[key])) {
          newValues.push.apply(newValues, Object.keys(conditionGroup.keys[key]));
        }

        newValues.forEach(function(newValue) {
          if(!keyToHeapElement[key].values[newValue]) {
            var inValue = [], inValueIdxMap = {};
            keyToHeapElement[key].conditionGroups.forEach(function(conditionGroup) {
              if(_.isPlainObject(conditionGroup.keys[key]) && conditionGroup.keys[key][newValue] === undefined) {
                inValue.push(conditionGroup);
                inValueIdxMap[conditionGroup.idx] = 1;
              }
            });
            keyToHeapElement[key].values[newValue] = inValue;
            keyToHeapElement[key].valuesIdxMap[newValue] = inValueIdxMap;
          }
        });

        for(var value in keyToHeapElement[key].values) {
          if((_.isPlainObject(conditionGroup.keys[key]) && conditionGroup.keys[key][value] === undefined) || 
             (!_.isPlainObject(conditionGroup.keys[key]) && valueKey == value)) {
            keyToHeapElement[key].values[value].push(conditionGroup);
            keyToHeapElement[key].valuesIdxMap[value][conditionGroup.idx] = 1;
          }
        }
      }

      keyToHeapElement[key].weight++;
      keyToHeapElement[key].conditionGroups.push(conditionGroup);

      if(insert === 1) {
        keysHeap.push(keyToHeapElement[key]);
      }
      else {
        keysHeap.updateItem(keyToHeapElement[key]);
      }

      conditionGroup.keysHeapElements.push(keyToHeapElement[key]);
    }

    if(conditionGroup.keysCount === 0) {
      keysHeap.push({
        idx : i,
        weight : 0,
        conditionGroup : conditionGroup,
      });
    }
  });

  var
  _keysHeap = new Heap(_heapComparator),
  prevKeyElement;

  while(keysHeap.size() > 0) {
    var keyElement = keysHeap.pop();

    if(keyElement.key !== undefined) {
      if(prevKeyElement !== undefined && !_.isArray(prevKeyElement.values) && prevKeyElement.values.__default__ === undefined) {
        prevKeyElement.values.__default__ = [];
        prevKeyElement.valuesIdxMap.__default__ = {};
      }
      prevKeyElement = keyElement;
    }

    _keysHeap.push(keyElement);
  }

  return _keysHeap;
};
