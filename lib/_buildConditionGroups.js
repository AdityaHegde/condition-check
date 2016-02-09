var

_ = require("lodash"),

RANGE_CONDITION_MAP = {
//range types
//000  -  0  -  not around the value
//010  -  2  -  equal to
//101  -  5  -  not equal to
//100  -  4  -  less than
//110  -  6  -  less than or equal to
//001  -  1  -  greater than
//011  -  3  -  greater than or equal to
//
//operation
//-2 - scrap condition
//-1 - keep both
//0  - keep the former
//1  - keep the later
//
//read as : when outer key (range type) is before inner key (range type) do value of inner key (operation),
//2 : { 4 : 0 } ==> 2 is persent before 4, do 0 ==> equal to is persent before less than, keep the former
  0 : {
    0 : -2,
    2 : -2,
    5 : -2,
    4 : -2,
    6 : -2,
    1 : -2,
    3 : -2,
  },
  2 : {
    0 : -2,
    2 : -2,
    5 : 0,
    4 : 0,
    6 : 0,
    1 : -2,
    3 : -2,
  },
  5 : {
    0 : -2,
    2 : 1,
    5 : -1,
    4 : -1,
    6 : -1,
    1 : 1,
    3 : 1,
  },
  4 : {
    0 : -2,
    2 : -2,
    5 : 0,
    4 : 0,
    6 : 0,
    1 : -2,
    3 : -2,
  },
  6 : {
    0 : -2,
    2 : -2,
    5 : 0,
    4 : 0,
    6 : 0,
    1 : -2,
    3 : -2,
  },
  1 : {
    0 : -2,
    2 : 1,
    5 : -1,
    4 : -1,
    6 : -1,
    1 : 1,
    3 : 1,
  },
  3 : {
    0 : -2,
    2 : 1,
    5 : -1,
    4 : -1,
    6 : -1,
    1 : 1,
    3 : 1,
  },
},

_selectRangeValue = function(rangeArray, l, lv, lt, h, hv, ht, newElement, newElementIdx, notPresent) {
  //console.log("_selectRangeValue : beg");
  //console.log(lt + " : " + ht + " : " + RANGE_CONDITION_MAP[lt][ht]);
  //console.log(l + " : " + h);
  //console.log("_selectRangeValue : end");
  if(RANGE_CONDITION_MAP[lt][ht] === -2) {
    //console.log("scrap condition");
    return undefined;
  }
  else if(RANGE_CONDITION_MAP[lt][ht] >= 0) {
    //console.log("retain one");
    if(l === h) {
      rangeArray[l] = [ [lv, lt], [hv, ht] ][RANGE_CONDITION_MAP[lt][ht]];
    }
    else {
      var idx = (RANGE_CONDITION_MAP[lt][ht] === 0 ? h++ : l++);
      if(notPresent) {
        rangeArray.splice(idx, 1, newElement);
      }
      else {
        rangeArray.splice(idx);
      }
    }
  }
  else if(notPresent) {
    rangeArray.splice(newElementIdx, 0, newElement);
    h++;
  }

  return [l, h];
},

_addRangeValueBetweenIndices = function(rangeArray, l, m, rangeValue, rangeType, h, notPresent) {
  //console.log("_addRangeValueBetweenIndices");
  //console.log(l + " : " + m + " : " + h);
  if(l >= 0) {
    var newIdxs = _selectRangeValue(rangeArray, l, rangeArray[l][0], rangeArray[l][1], m, rangeValue, rangeType, [rangeValue, rangeType], l + 1, notPresent);

    if(!newIdxs) {
      return false;
    }

    notPresent = (l !== newIdxs[0] || m !== newIdxs[1]);

    m = newIdxs[1];
    h += newIdxs[0] - l;
  }

  //console.log(m + " :*: " + h);
  //console.log(rangeArray);

  if(h < rangeArray.length) {
    if(!_selectRangeValue(rangeArray, m, rangeValue, rangeType, h, rangeArray[h][0], rangeArray[h][1], [rangeValue, rangeType], m, notPresent)) {
      return false;
    }
  }

  return true;
},

_addToRangeArrayRecursive = function(rangeArray, rangeValue, rangeType, l, h) {
  if(l > h) {
    if(!_addRangeValueBetweenIndices(rangeArray, h, l < rangeArray.length ? l : h, rangeValue, rangeType, l, true)) {
      return undefined;
    }
    return rangeArray;
  }

  var m = Math.floor((l + h) / 2);

  if(rangeArray[m][0] > rangeValue) {
    return _addToRangeArrayRecursive(rangeArray, rangeValue, rangeType, l, m - 1);
  }
  else if(rangeArray[m][0] === rangeValue) {
    var mt = rangeArray[m][1];
    //console.log("rangeArray[m][1] updated");
    //console.log(rangeArray[m][1] + " : " + rangeType);
    rangeArray[m][1] = rangeArray[m][1] & rangeType;
    //console.log(rangeArray[m][1]);

    //if either older type or type of ele to be added is equal to (2)
    //and new type is not equal to (2) reject the condition
    if(((mt === 2 || rangeType === 2) && rangeArray[m][1] !== 2) ||
    //update the posiiton of updated type with neighbouring values
       !_addRangeValueBetweenIndices(rangeArray, m - 1, m, rangeValue, rangeType, m + 1, false)) {
      return undefined;
    }
    return rangeArray;
  }
  else {
    return _addToRangeArrayRecursive(rangeArray, rangeValue, rangeType, m + 1, h);
  }
},

_addToRangeArray = function(rangeArray, rangeValue, rangeType) {
  //console.log("_addToRangeArray : beg");
  //console.log(rangeArray);
  //console.log([rangeValue, rangeType]);
  //console.log("_addToRangeArray : end");
  return _addToRangeArrayRecursive(rangeArray, rangeValue, rangeType, 0, rangeArray.length - 1);
},

_handleSingleKey = function(condition, conditionGroup, key, value) {
  var assignValue = 1;
  if(_.isPlainObject(value)) {
    var
    subkey = Object.keys(value)[0],
    retGroups = [],
    notInKeys,
    rangeType;
    if(subkey !== undefined) {
      var subvalue = value[subkey];
      switch(subkey) {
        case "-in"  :
          var avoidDuplicates = {};
          subvalue.forEach(function(inCond) {
            if(!avoidDuplicates[inCond]) {
              retGroups.push.apply(retGroups, _handleSingleKey(value[key], _.cloneDeep(conditionGroup), key, inCond));
              avoidDuplicates[inCond] = 1;
            }
          });
          break;

        case "-ne"  :
          notInKeys = [value[subkey]];

        case "-!in" :
          notInKeys = notInKeys || value[subkey];
          var notInValues = {};
          retGroups = [conditionGroup];

          if(_.isArray(conditionGroup.keys[key])) {
            notInKeys.every(function(notIn) {
              if(_addToRangeArray(conditionGroup.keys[key], notIn, 5) === undefined) {
                retGroups = [];
                return false;
              }
              return true;
            });
          }
          else {
            //if there is no previous condition or a not in / not equal to condition exists,
            //initialize notInValues with an empty object or conditionGroup.keys[key]
            if(conditionGroup.keys[key] === undefined || _.isPlainObject(conditionGroup.keys[key])) {
              notInValues = conditionGroup.keys[key] || {};
            }

            notInKeys.forEach(function(notIn) {
              notInValues[notIn] = 1;
            });

            //if an equal to condition exists and the value is in not equal to then reject the conditon as it is always false
            if(conditionGroup.keys[key] !== undefined && !_.isPlainObject(conditionGroup.keys[key])) {
              if(notInValues[conditionGroup.keys[key]] !== undefined) {
                retGroups = [];
              }
            }
            else {
              conditionGroup.keys[key] = notInValues;
              notInKeys.forEach(function(notIn) {
                conditionGroup.keyvalues[key + "__" + notIn] = 2;
              });
            }
          }

          break;

        case "-gt"  : rangeType = 1;
        case "-gte" : rangeType = rangeType || 3;
        case "-lt"  : rangeType = rangeType || 4;
        case "-lte" : rangeType = rangeType || 6;
          var existingArray;
          retGroups = [conditionGroup];

          if(conditionGroup.keys[key] !== undefined) {
            if(_.isArray(conditionGroup.keys[key])) {
              existingArray = conditionGroup.keys[key];
            }
            else if(_.isPlainObject(conditionGroup.keys[key])) {
              existingArray = [];

              Object.keys(conditionGroup.keys[key]).sort(function(a, b) {
                return Number(a) - Number(b);
              }).forEach(function(value) {
                existingArray.push([Number(value), 5]);
              });
            }
            else {
              existingArray = [ [conditionGroup.keys[key], 2] ];
            }

            //console.log(existingArray);
            existingArray = _addToRangeArray(existingArray, subvalue, rangeType);
            if(existingArray === undefined) {
              retGroups = [];
            }
            else {
              conditionGroup.keys[key] = existingArray;
            }
          }
          else {
            conditionGroup.keys[key] = [ [subvalue, rangeType] ];
          }

          break;
      }
    }
    else {
      retGroups = [conditionGroup];
    }
    return retGroups;
  }
  else if(conditionGroup.keys[key] !== undefined) {
    if(_.isArray(conditionGroup.keys[key])) {
      assignValue = 0;

      if(_addToRangeArray(conditionGroup.keys[key], value, 2) === undefined) {
        return [];
      }
    }
    else if(_.isPlainObject(conditionGroup.keys[key])) {
      if(conditionGroup.keyvalues[key + "__" + value] === 2) {
        return [];
      }
    }
    else {
      if(conditionGroup.keyvalues[key + "__" + value] === undefined) {
        return [];
      }
    }
  }

  if(assignValue === 1) {
    conditionGroup.keys[key] = value;
    conditionGroup.keyvalues[key + "__" + value] = 1;
  }

  return [conditionGroup];
},

_handleKey = function(condition, conditionGroup) {
  var
  key = Object.keys(condition)[0],
  retGroups = [];

  if(key !== undefined) {
    switch(key) {
      case "-or"  :
        condition[key].forEach(function(or) {
          retGroups.push.apply(retGroups, _handleKey(or, _.cloneDeep(conditionGroup)));
        });
        break;

      case "-and" :
        retGroups = [conditionGroup];
        condition[key].forEach(function(and) {
          var retGroupsTemp = [];
          retGroups.forEach(function(retGroup) {
            retGroupsTemp.push.apply(retGroupsTemp, _handleKey(and, retGroup));
          });
          retGroups = retGroupsTemp;
        });
        break;

      default     :
        retGroups = _handleSingleKey(condition, conditionGroup, key, condition[key]);
    }
  }
  else {
    retGroups = [conditionGroup];
  }

  return retGroups;
};

module.exports = function(entities) {
  var entitiesToConditionsMap = {};
  for(var entity in entities) {
    entitiesToConditionsMap[entity] = _handleKey(entities[entity].condition, {
      keys : {},
      keyvalues : {},
      entityId : entity,
    });

    if(entitiesToConditionsMap[entity].length === 0) {
      /*entitiesToConditionsMap[entity] = [{
        keys : {},
        keyvalues : {},
        entityId : entity,
      }];*/
    }
    else {
      var avoidDuplicates = {};
      entitiesToConditionsMap[entity] = entitiesToConditionsMap[entity].filter(function(conditionGroup) {
        var str = JSON.stringify(conditionGroup);
        if(!avoidDuplicates[str]) {
          avoidDuplicates[str] = 1;
          return true;
        }
        return false;
      });
    }
  }

  return entitiesToConditionsMap;
};
