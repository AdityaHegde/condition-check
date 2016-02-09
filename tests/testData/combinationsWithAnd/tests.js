var
conditionGroups = require("./conditionGroups");

module.exports = [{
//0
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : "a"},
          {"condA" : "a"},
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[0],
  },
  title : "Entity with '-and' and same condition repeated",
}, {
//1
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : "a"},
          {"condA" : "b"},
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[1],
  },
  title : "Entity with '-and' and conditions with same key but differet values",
}, {
//2
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : "a"},
          {"condA" : { "-in" : ["a", "b", "c"] } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[2],
  },
  title : "Entity with '-and', an equal to and '-in' condition with equal to value in the 'in' list",
}, {
//3
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : "a"},
          {"condA" : { "-in" : ["b", "c"] } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[3],
  },
  title : "Entity with '-and', an equal to and '-in' condition on same key with equal to value not in the 'in' list",
}, {
//4
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : "a"},
          {"condA" : { "-ne" : "a" } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[4],
  },
  title : "Entity with '-and', equal to and not equal to on same key and value",
}, {
//5
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : "a"},
          {"condA" : { "-ne" : "b" } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[5],
  },
  title : "Entity with '-and', equal to and not equal to on same key and differet value",
}, {
//6
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : "a"},
          {"condA" : { "-!in" : ["a", "b", "c"] } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[6],
  },
  title : "Entity with '-and', equal to and '-!in' on same key and equal value in the 'not in' list",
}, {
//7
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : "a"},
          {"condA" : { "-!in" : ["b", "c"] } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[7],
  },
  title : "Entity with '-and', equal to and '-!in' on same key and equal value not in the 'not in' list",
}, {
//8
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : { "-!in" : ["a", "b", "c"] } },
          {"condA" : "a"},
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[8],
  },
  title : "Entity with '-and', '-!in' and equal to on same key and equal value in the 'not in' list",
}, {
//9
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : { "-!in" : ["b", "c"] } },
          {"condA" : "a"},
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[9],
  },
  title : "Entity with '-and', '-!in' and equal to on same key and equal value not in the 'not in' list",
}];
