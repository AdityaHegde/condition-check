var
conditionGroups = require("./conditionGroups"),
heaps = require("./heaps"),
conditionCheckTests = require("./conditionCheckTests");

module.exports = [{
//0
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : 15},
          {"condA" : { "-lte" : 20 }},
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
    values : [
      [
        15,
        [
          [],
          ["ent0"],
          [],
        ],
      ]
    ],
  },
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[0],
  title : "Entity with equal to and '-lte' condition with overlapping value",
}, {
//1
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : 15},
          {"condA" : { "-lte" : 10 }},
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[1],
  },
  conditionGroups : conditionGroups[1],
  heap : heaps[1],
  meta : [],
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[1],
  title : "Entity with equal to and '-lte' condition with opposing value",
}, {
//2
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : 15},
          {"condA" : { "-lte" : 15 }},
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
    values : [
      [
        15,
        [
          [],
          ["ent0"],
          [],
        ],
      ]
    ],
  },
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[2],
  title : "Entity with equal to and '-lte' condition with same value",
}, {
//3
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : 15},
          {"condA" : { "-lt" : 15 }},
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[3],
  },
  conditionGroups : conditionGroups[3],
  heap : heaps[3],
  meta : [],
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[3],
  title : "Entity with equal to and '-lt' condition with same value",
}, {
//4
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : { "-ne" : 15 }},
          {"condA" : { "-lte" : 20 }},
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
        15,
        [
          ["ent0"],
          [],
          ["ent0"],
        ],
      ],
      [
        20,
        [
          ["ent0"],
          ["ent0"],
          [],
        ],
      ]
    ],
  },
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[4],
  title : "Entity with '-ne' and '-lte' condition with overlapping value",
}, {
//5
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : { "-ne" : 15 }},
          {"condA" : { "-lte" : 10 }},
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
    values : [
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
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[5],
  title : "Entity with '-ne' and '-lte' condition with opposing value",
}, {
//6
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : { "-ne" : 15 }},
          {"condA" : { "-lte" : 15 }},
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
        15,
        [
          ["ent0"],
          [],
          [],
        ],
      ],
    ],
  },
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[6],
  title : "Entity with '-ne' and '-lte' condition with same value",
}, {
//7
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : { "-!in" : [ 15, 10, 20, 5 ] }},
          {"condA" : { "-lte" : 15 }},
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
    values : [
      [
        5,
        [
          ["ent0"],
          [],
          ["ent0"],
        ],
      ],
      [
        10,
        [
          ["ent0"],
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
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[7],
  title : "Entity with '-!in' and '-lte' condition",
}, {
//8
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : { "-lte" : 20 }},
          {"condA" : 15},
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
        15,
        [
          [],
          ["ent0"],
          [],
        ],
      ],
    ],
  },
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[8],
  title : "Entity with '-lte' and equal to condition",
}, {
//9
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : { "-lte" : 10 }},
          {"condA" : 15},
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[9],
  },
  conditionGroups : conditionGroups[9],
  heap : heaps[9],
  meta : [],
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[9],
  title : "Entity with '-lte' and equal to condition",
}, {
//10
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : { "-lte" : 15 }},
          {"condA" : { "-!in" : [ 15, 10, 20, 5 ] }},
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
          ["ent0"],
        ],
      ],
      [
        10,
        [
          ["ent0"],
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
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[10],
  title : "Entity with '-lte' and '-!in' condition",
}, {
//11
  entities : {
    "ent0" : {
      condition : {
        "-and" : [
          {"condA" : { "-lte" : 15 }},
          {"condA" : 15},
          {"condA" : { "-!in" : [ 10, 15, 20 ] }},
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : conditionGroups[11],
  },
  conditionGroups : conditionGroups[11],
  heap : heaps[11],
  meta : [],
  targets : [{
    targetId : "tar0",
    entities : ["ent0"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[11],
  title : "Entity with '-lte', equal to and '-!in' condition with overlapping values",
}];
