var
conditionGroups = require("./conditionGroups"),
heaps = require("./heaps"),
conditionCheckTests = require("./conditionCheckTests");

module.exports = [{
//0
  entities : {
    "ent0" : {
      condition : {
        "-or" : [
          {"condA" : "a"},
          {"condA" : "a"},
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[0],
  },
  conditionGroups : conditionGroups[0],
  heap : heaps[0],
  meta : {
    key : "condA",
    values : {
      "a" : ["ent0"],
    },
  },
  title : "Entity with '-or' and same condition repeated",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[0],
}, {
//1
  entities : {
    "ent0" : {
      condition : {
        "-or" : [
          {"condA" : "a"},
          {"condA" : "b"},
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[1],
  },
  conditionGroups : conditionGroups[1],
  heap : heaps[1],
  meta : {
    key : "condA",
    values : {
      "a" : ["ent0"],
      "b" : ["ent0"],
    },
  },
  title : "Entity with '-or' and conditions with same key but differet values",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[1],
}, {
//2
  entities : {
    "ent0" : {
      condition : {
        "-or" : [
          {"condA" : "a"},
          {"condA" : { "-in" : ["a", "b", "c"] } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[2],
  },
  conditionGroups : conditionGroups[2],
  heap : heaps[2],
  meta : {
    key : "condA",
    values : {
      "a" : ["ent0"],
      "b" : ["ent0"],
      "c" : ["ent0"],
    },
  },
  title : "Entity with '-or', an equal to and '-in' condition with equal to value in the 'in' list",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[2],
}, {
//3
  entities : {
    "ent0" : {
      condition : {
        "-or" : [
          {"condA" : "a"},
          {"condA" : { "-in" : ["b", "c"] } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[3],
  },
  conditionGroups : conditionGroups[3],
  heap : heaps[3],
  meta : {
    key : "condA",
    values : {
      "a" : ["ent0"],
      "b" : ["ent0"],
      "c" : ["ent0"],
    },
  },
  title : "Entity with '-or', an equal to and '-in' condition on same key with equal to value not in the 'in' list",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[3],
}, {
//4
  entities : {
    "ent0" : {
      condition : {
        "-or" : [
          {"condA" : "a"},
          {"condA" : { "-ne" : "a" } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[4],
  },
  conditionGroups : conditionGroups[4],
  heap : heaps[4],
  //TODO : has to be meta : ["ent0"] as it is always true
  meta : {
    key : "condA",
    values : {
      "a" : ["ent0"],
      "__default__" : ["ent0"],
    },
  },
  title : "Entity with '-or', equal to and not equal to on same key and value",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[4],
}, {
//5
  entities : {
    "ent0" : {
      condition : {
        "-or" : [
          {"condA" : "a"},
          {"condA" : { "-ne" : "b" } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[5],
  },
  conditionGroups : conditionGroups[5],
  heap : heaps[5],
  meta : {
    key : "condA",
    values : {
      "a" : ["ent0"],
      "b" : [],
      "__default__" : ["ent0"],
    },
  },
  title : "Entity with '-or', equal to and not equal to on same key and differet value",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[5],
}, {
//6
  entities : {
    "ent0" : {
      condition : {
        "-or" : [
          {"condA" : "a"},
          {"condA" : { "-!in" : ["a", "b", "c"] } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[6],
  },
  conditionGroups : conditionGroups[6],
  heap : heaps[6],
  meta : {
    key : "condA",
    values : {
      "a" : ["ent0"],
      "b" : [],
      "c" : [],
      "__default__" : ["ent0"],
    },
  },
  title : "Entity with '-or', equal to and not '-!in' on same key and equal value in the 'not in' list",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[6],
}, {
//7
  entities : {
    "ent0" : {
      condition : {
        "-or" : [
          {"condA" : "a"},
          {"condA" : { "-!in" : ["b", "c"] } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[7],
  },
  conditionGroups : conditionGroups[7],
  heap : heaps[7],
  meta : {
    key : "condA",
    values : {
      "a" : ["ent0"],
      "b" : [],
      "c" : [],
      "__default__" : ["ent0"],
    },
  },
  title : "Entity with '-or', equal to and not '-!in' on same key and equal value not in the 'not in' list",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[7],
}, {
//8
  entities : {
    "ent0" : {
      condition : {
        "-or" : [
          {"condA" : "a"},
          {"condA" : { "-!in" : ["a", "b"] } },
          {"condA" : { "-ne" : "c" } },
          {"condA" : "b" },
          {"condA" : "c" },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[8],
  },
  conditionGroups : conditionGroups[8],
  heap : heaps[8],
  //TODO : has to be meta : ["ent0"] as it is always true
  meta : {
    key : "condA",
    values : {
      "a" : ["ent0"],
      "b" : ["ent0"],
      "c" : ["ent0"],
      "__default__" : ["ent0"],
    },
  },
  title : "Entity with equal to, '-!in' and not equal to on same key and multiple conditions",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[8],
}];
