var
conditionGroups = require("./conditionGroups"),
heaps = require("./heaps"),
conditionCheckTests = require("./conditionCheckTests");

module.exports = [{
//0
  entities : {
    "ent0" : {
      condition : {
        "condA" : { "-lt" : 5 },
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
    values : [
      [
        5,
        [
          ["ent0"],
          [],
          [],
        ],
      ],
    ],
  },
  title : "Entity with '-lt' condition",
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
        "condA" : { "-lte" : 5 },
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
    values : [
      [
        5,
        [
          ["ent0"],
          ["ent0"],
          [],
        ],
      ],
    ],
  },
  title : "Entity with '-lte' condition",
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
        "condA" : { "-gt" : 5 },
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
    values : [
      [
        5,
        [
          [],
          [],
          ["ent0"],
        ],
      ],
    ],
  },
  title : "Entity with '-gt' condition",
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
        "condA" : { "-gte" : 5 },
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
    values : [
      [
        5,
        [
          [],
          ["ent0"],
          ["ent0"],
        ],
      ],
    ],
  },
  title : "Entity with '-gte' condition",
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
        '-and' : [
          { "condA" : { "-gte" : 5 } },
          { "condA" : { "-lte" : 10 } },
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
    values : [
      [
        5,
        [
          [],
          ["ent0"],
          ["ent0"],
        ],
      ],
      [
        10,
        [
          ["ent0"],
          ["ent0"],
          [],
        ],
      ],
    ],
  },
  title : "Entity with '-gte' and '-lte' condition",
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
        '-and' : [
          { "condA" : { "-lte" : 5 } },
          { "condA" : { "-gte" : 10 } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[5],
  },
  conditionGroups : conditionGroups[5],
  heap : heaps[5],
  meta : [],
  title : "Entity with '-gte' and '-lte' condition with opposing values",
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
        '-and' : [
          { "condA" : { "-gt" : 5 } },
          { "condA" : { "-lt" : 10 } },
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
    values : [
      [
        5,
        [
          [],
          [],
          ["ent0"],
        ],
      ],
      [
        10,
        [
          ["ent0"],
          [],
          [],
        ],
      ],
    ],
  },
  title : "Entity with '-lt' and '-gt' condition",
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
        '-and' : [
          { "condA" : { "-lt" : 5 } },
          { "condA" : { "-gt" : 10 } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[7],
  },
  conditionGroups : conditionGroups[7],
  heap : heaps[7],
  meta : [],
  title : "Entity with '-lt' and '-gt' condition with opposing values",
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
        '-and' : [
          { "condA" : { "-gt" : 5 } },
          { "condA" : { "-gt" : 10 } },
        ],
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
    values : [
      [
        10,
        [
          [],
          [],
          ["ent0"],
        ],
      ],
    ],
  },
  title : "Entity with 2 '-gt' conditions with overlapping values",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[8],
}, {
//9
  entities : {
    "ent0" : {
      condition : {
        '-and' : [
          { "condA" : { "-gte" : 5 } },
          { "condA" : { "-gte" : 10 } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[9],
  },
  conditionGroups : conditionGroups[9],
  heap : heaps[9],
  meta : {
    key : "condA",
    values : [
      [
        10,
        [
          [],
          ["ent0"],
          ["ent0"],
        ],
      ],
    ],
  },
  title : "Entity with 2 '-gte' conditions with overlapping values",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[9],
}, {
//10
  entities : {
    "ent0" : {
      condition : {
        '-and' : [
          { "condA" : { "-lt" : 5 } },
          { "condA" : { "-lt" : 10 } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[10],
  },
  conditionGroups : conditionGroups[10],
  heap : heaps[10],
  meta : {
    key : "condA",
    values : [
      [
        5,
        [
          ["ent0"],
          [],
          [],
        ],
      ],
    ],
  },
  title : "Entity with 2 '-lt' conditions with overlapping values",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[10],
}, {
//11
  entities : {
    "ent0" : {
      condition : {
        '-and' : [
          { "condA" : { "-lte" : 5 } },
          { "condA" : { "-lte" : 10 } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[11],
  },
  conditionGroups : conditionGroups[11],
  heap : heaps[11],
  meta : {
    key : "condA",
    values : [
      [
        5,
        [
          ["ent0"],
          ["ent0"],
          [],
        ],
      ],
    ],
  },
  title : "Entity with 2 '-lte' conditions with overlapping values",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[11],
}, {
//12
  entities : {
    "ent0" : {
      condition : {
        '-and' : [
          { "condA" : { "-lte" : 5 } },
          { "condA" : { "-gte" : 5 } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[12],
  },
  conditionGroups : conditionGroups[12],
  heap : heaps[12],
  meta : {
    key : "condA",
    values : [
      [
        5,
        [
          [],
          ["ent0"],
          [],
        ],
      ],
    ],
  },
  title : "Entity with '-lte' and '-gte' conditions with same values",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[12],
}, {
//13
  entities : {
    "ent0" : {
      condition : {
        '-and' : [
          { "condA" : { "-gt" : 5 } },
          { "condA" : { "-lt" : 15 } },
          { "condA" : { "-gt" : 10 } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[13],
  },
  conditionGroups : conditionGroups[13],
  heap : heaps[13],
  meta : {
    key : "condA",
    values : [
      [
        10,
        [
          [],
          [],
          ["ent0"],
        ],
      ],
      [
        15,
        [
          ["ent0"],
          [],
          [],
        ],
      ],
    ],
  },
  title : "Entity with '-lt' and 2 '-gt' conditions with one '-gt' overriding the other",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[13],
}, {
//14
  entities : {
    "ent0" : {
      condition : {
        '-or' : [
          { "condA" : { "-lt" : 5 } },
          { "condA" : { "-gt" : 10 } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[14],
  },
  conditionGroups : conditionGroups[14],
  heap : heaps[14],
  meta : {
    key : "condA",
    values : [
      [
        5,
        [
          ["ent0"],
          [],
          [],
        ],
      ],
      [
        10,
        [
          [],
          [],
          ["ent0"],
        ],
      ],
    ],
  },
  title : "Entity with '-lt' and '-gt' conditions with opposing values but within or",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[14],
}, {
//15
  entities : {
    "ent0" : {
      condition : {
        '-or' : [
          {
            '-and' : [
              { "condA" : { "-gt" : 5 } },
              { "condA" : { "-lte" : 10 } },
            ],
          },
          {
            '-and' : [
              { "condA" : { "-gte" : 10 } },
              { "condA" : { "-lt" : 15 } },
            ],
          },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[15],
  },
  conditionGroups : conditionGroups[15],
  heap : heaps[15],
  meta : {
    key : "condA",
    values : [
      [
        5,
        [
          [],
          [],
          ["ent0"],
        ],
      ],
      [
        10,
        [
          ["ent0"],
          ["ent0"],
          ["ent0"],
        ],
      ],
      [
        15,
        [
          ["ent0"],
          [],
          [],
        ],
      ],
    ],
  },
  title : "Entity with 2 sets, '-gt' : '-lte' and '-gte' : '-lt' with a common value",
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[15],
}];
