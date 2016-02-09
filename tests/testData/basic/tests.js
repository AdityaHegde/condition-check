var
conditionGroups = require("./conditionGroups"),
heaps = require("./heaps"),
conditionCheckTests = require("./conditionCheckTests");

module.exports = [{
//0
  entities : {},
  conditionGroupsMap : {},
  conditionGroups : conditionGroups[0],
  heap : heaps[0],
  title : "Empty entities",
  meta : [],
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
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
      condition : {},
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[1],
  },
  conditionGroups : conditionGroups[1],
  heap : heaps[1],
  meta : ["ent0"],
  title : "Entity with empty condition",
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
        "condA" : {},
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[2],
  },
  conditionGroups : conditionGroups[2],
  heap : heaps[2],
  meta : ["ent0"],
  title : "Entity with empty value on a key",
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
        "condA" : "a",
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
    },
  },
  title : "Entity with simple equal to",
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
        "-and" : [
          {"condA" : "a"},
          {"condB" : "b"},
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[4],
  },
  conditionGroups : conditionGroups[4],
  heap : heaps[4],
  meta : {
    key : "condA",
    values : {
      "a" : {
        key : "condB",
        values : {
          "b" : ["ent0"],
        },
      },
    },
  },
  title : "Entity with '-and' condition",
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
          {"condB" : "b"},
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
      "__default__" : {
        key : "condB",
        values : {
          "b" : ["ent0"],
        },
      },
    },
  },
  title : "Entity with '-or' condition",
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
        "condA" : { "-ne" : "a" },
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
      "a" : [],
      "__default__" : ["ent0"],
    },
  },
  title : "Entity with '-ne' condition",
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
        "condA" : { "-in" : ["a", "a", "b", "c"] },
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
      "b" : ["ent0"],
      "c" : ["ent0"],
    },
  },
  title : "Entity with '-in' condition",
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
        "condA" : { "-!in" : ["a", "b", "c"] },
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[8],
  },
  conditionGroups : conditionGroups[8],
  heap : heaps[8],
  meta : {
    key : "condA",
    values : {
      "a" : [],
      "b" : [],
      "c" : [],
      "__default__" : ["ent0"],
    },
  },
  title : "Entity with '-!in' condition",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[8],
}];
