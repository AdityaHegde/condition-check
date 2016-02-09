var
conditionGroups = require("./conditionGroups"),
heaps = require("./heaps"),
conditionCheckTests = require("./conditionCheckTests");

module.exports = [{
//0
  entities : {
    "ent0" : {
      condition : {
        "condA" : "a",
      },
    },
    "ent1" : {
      condition : {
        "condA" : { '-in' : ["a", "b"], },
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : [
      conditionGroups[0][0],
    ],
    "ent1" : [
      conditionGroups[0][1],
      conditionGroups[0][2],
    ],
  },
  conditionGroups : conditionGroups[0],
  heap : heaps[0],
  meta : {
    key : "condA",
    values : {
      "a" : ["ent0", "ent1"],
      "b" : ["ent1"],
    },
  },
  targets : [{
    targetId : "tar0",
    entities : ["ent0", "ent1"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[0],
  title : "2 simple entities",
}, {
//1
  entities : {
    "ent0" : {
      condition : {
        '-and' : [
          { "condA" : "a", },
          { "condB" : "a", },
        ],
      },
    },
    "ent1" : {
      condition : {
        '-and' : [
          { "condA" : "a", },
          { "condB" : "a", },
          { "condC" : "b", },
        ],
      },
    },
    "ent2" : {
      condition : {
        '-and' : [
          { "condA" : "b", },
          { "condC" : "c", },
        ],
      },
    },
    "ent3" : {
      condition : {
        '-and' : [
          { "condC" : "c", },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : [
      conditionGroups[1][0],
    ],
    "ent1" : [
      conditionGroups[1][1],
    ],
    "ent2" : [
      conditionGroups[1][2],
    ],
    "ent3" : [
      conditionGroups[1][3],
    ],
  },
  conditionGroups : conditionGroups[1],
  heap : heaps[1],
  meta : {
    key : "condA",
    values : {
      "a" : {
        key : "condB",
        values : {
          "a" : {
            endPoints : ["ent0"],
            key : "condC",
            values : {
              "b" : ["ent1"],
              "c" : ["ent3"],
            },
          },
          "__default__" : {
            key : "condC",
            values : {
              "b" : [],
              "c" : ["ent3"],
            },
          },
        },
      },
      "b" : {
        key : "condC",
        values : {
          "b" : [],
          "c" : ["ent2", "ent3"],
        }
      },
      "__default__" : {
        key : "condC",
        values : {
          "b" : [],
          "c" : ["ent3"],
        },
      },
    },
  },
  targets : [{
    targetId : "tar0",
    entities : ["ent0", "ent1", "ent2", "ent3"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[1],
  title : "4 entities with common values on keys",
}, {
//2
  entities : {
    "ent0" : {
      condition : {
        '-and' : [
          { "condA" : { '-in' : ["a", "b"] } },
          { "condB" : "a" },
        ],
      },
    },
    "ent1" : {
      condition : {
        '-and' : [
          { "condA" : { '-ne' : "a" } },
          { "condB" : "a", },
          { "condC" : "b", },
        ],
      },
    },
    "ent2" : {
      condition : {
        '-and' : [
          { "condA" : "b", },
          { "condC" : "c", },
        ],
      },
    },
    "ent3" : {
      condition : {
        '-and' : [
          { "condC" : { '-!in' : ["b", "c"] } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : [
      conditionGroups[2][0],
      conditionGroups[2][1],
    ],
    "ent1" : [
      conditionGroups[2][2],
    ],
    "ent2" : [
      conditionGroups[2][3],
    ],
    "ent3" : [
      conditionGroups[2][4],
    ],
  },
  conditionGroups : conditionGroups[2],
  heap : heaps[2],
  meta : {
    key : "condA",
    values : {
      "a" : {
        key : "condB",
        values : {
          "a" : {
            endPoints : ["ent0"],
            key : "condC",
            values : {
              "b" : [],
              "c" : [],
              "__default__" : ["ent3"],
            },
          },
        },
      },
      "b" : {
        key : "condB",
        values : {
          "a" : {
            endPoints : ["ent0"],
            key : "condC",
            values : {
              "b" : ["ent1"],
              "c" : ["ent2"],
              "__default__" : ["ent3"],
            },
          },
          "__default__" : {
            key : "condC",
            values : {
              "b" : [],
              "c" : ["ent2"],
              "__default__" : ["ent3"],
            },
          },
        },
      },
      "__default__" : {
        key : "condB",
        values : {
          "a" : {
            key : "condC",
            values : {
              "b" : ["ent1"],
              "c" : [],
              "__default__" : ["ent3"],
            },
          },
          "__default__" : {
            key : "condC",
            values : {
              "b" : [],
              "c" : [],
              "__default__" : ["ent3"],
            },
          },
        },
      },
    },
  },
  targets : [{
    targetId : "tar0",
    entities : ["ent0", "ent1", "ent2", "ent3"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[2],
  title : "4 entities with common values on keys with mixture of equal to, '-ne', '-in' and '-!in'",
}, {
//3
  entities : {
    "ent0" : {
      condition : {
        '-and' : [
          { "condA" : { '-in' : [10, 15] } },
          { "condB" : 5 },
        ],
      },
    },
    "ent1" : {
      condition : {
        '-and' : [
          { "condA" : { '-ne' : 10 } },
          { "condB" : 10, },
        ],
      },
    },
    "ent2" : {
      condition : {
        '-and' : [
          { "condA" : { '-gte' : 5 } },
          { "condA" : { '-lte' : 20 } },
          { "condB" : { '-gt' : 10 } },
        ],
      },
    },
    "ent3" : {
      condition : {
        '-and' : [
          { "condA" : { '-!in' : [5, 10] } },
          { "condB" : { '-lt' : 15 } },
        ],
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : [
      conditionGroups[3][0],
      conditionGroups[3][1],
    ],
    "ent1" : [
      conditionGroups[3][2],
    ],
    "ent2" : [
      conditionGroups[3][3],
    ],
    "ent3" : [
      conditionGroups[3][4],
    ],
  },
  conditionGroups : conditionGroups[3],
  heap : heaps[3],
  meta : {
    key : "condA",
    values : [
      [
        5,
        [
          {
            key : "condB",
            values : [
              [
                5,
                [
                  ["ent3"],
                  ["ent3"],
                  ["ent3"],
                ],
              ],
              [
                10,
                [
                  ["ent3"],
                  ["ent1", "ent3"],
                  ["ent3"],
                ],
              ],
              [
                15,
                [
                  ["ent3"],
                  [],
                  [],
                ],
              ],
            ],
          },
          {
            key : "condB",
            values : [
              [
                5,
                [
                  [],
                  [],
                  [],
                ],
              ],
              [
                10,
                [
                  [],
                  ["ent1"],
                  ["ent2"],
                ],
              ],
              [
                15,
                [
                  ["ent2"],
                  ["ent2"],
                  ["ent2"],
                ],
              ],
            ],
          },
          {
            key : "condB",
            values : [
              [
                5,
                [
                  ["ent3"],
                  ["ent3"],
                  ["ent3"],
                ],
              ],
              [
                10,
                [
                  ["ent3"],
                  ["ent1", "ent3"],
                  ["ent2", "ent3"],
                ],
              ],
              [
                15,
                [
                  ["ent2", "ent3"],
                  ["ent2"],
                  ["ent2"],
                ],
              ],
            ],
          },
        ],
      ],
      [
        10,
        [
          {
            key : "condB",
            values : [
              [
                5,
                [
                  ["ent3"],
                  ["ent3"],
                  ["ent3"],
                ],
              ],
              [
                10,
                [
                  ["ent3"],
                  ["ent1", "ent3"],
                  ["ent2", "ent3"],
                ],
              ],
              [
                15,
                [
                  ["ent2", "ent3"],
                  ["ent2"],
                  ["ent2"],
                ],
              ],
            ],
          },
          {
            key : "condB",
            values : [
              [
                5,
                [
                  [],
                  ["ent0"],
                  [],
                ],
              ],
              [
                10,
                [
                  [],
                  [],
                  ["ent2"],
                ],
              ],
              [
                15,
                [
                  ["ent2"],
                  ["ent2"],
                  ["ent2"],
                ],
              ],
            ],
          },
          {
            key : "condB",
            values : [
              [
                5,
                [
                  ["ent3"],
                  ["ent3"],
                  ["ent3"],
                ],
              ],
              [
                10,
                [
                  ["ent3"],
                  ["ent1", "ent3"],
                  ["ent2", "ent3"],
                ],
              ],
              [
                15,
                [
                  ["ent2", "ent3"],
                  ["ent2"],
                  ["ent2"],
                ],
              ],
            ],
          },
        ],
      ],
      [
        15,
        [
          {
            key : "condB",
            values : [
              [
                5,
                [
                  ["ent3"],
                  ["ent3"],
                  ["ent3"],
                ],
              ],
              [
                10,
                [
                  ["ent3"],
                  ["ent1", "ent3"],
                  ["ent2", "ent3"],
                ],
              ],
              [
                15,
                [
                  ["ent2", "ent3"],
                  ["ent2"],
                  ["ent2"],
                ],
              ],
            ],
          },
          {
            key : "condB",
            values : [
              [
                5,
                [
                  ["ent3"],
                  ["ent0", "ent3"],
                  ["ent3"],
                ],
              ],
              [
                10,
                [
                  ["ent3"],
                  ["ent1", "ent3"],
                  ["ent2", "ent3"],
                ],
              ],
              [
                15,
                [
                  ["ent2", "ent3"],
                  ["ent2"],
                  ["ent2"],
                ],
              ],
            ],
          },
          {
            key : "condB",
            values : [
              [
                5,
                [
                  ["ent3"],
                  ["ent3"],
                  ["ent3"],
                ],
              ],
              [
                10,
                [
                  ["ent3"],
                  ["ent1", "ent3"],
                  ["ent2", "ent3"],
                ],
              ],
              [
                15,
                [
                  ["ent2", "ent3"],
                  ["ent2"],
                  ["ent2"],
                ],
              ],
            ],
          },
        ],
      ],
      [
        20,
        [
          {
            key : "condB",
            values : [
              [
                5,
                [
                  ["ent3"],
                  ["ent3"],
                  ["ent3"],
                ],
              ],
              [
                10,
                [
                  ["ent3"],
                  ["ent1", "ent3"],
                  ["ent2", "ent3"],
                ],
              ],
              [
                15,
                [
                  ["ent2", "ent3"],
                  ["ent2"],
                  ["ent2"],
                ],
              ],
            ],
          },
          {
            key : "condB",
            values : [
              [
                5,
                [
                  ["ent3"],
                  ["ent3"],
                  ["ent3"],
                ],
              ],
              [
                10,
                [
                  ["ent3"],
                  ["ent1", "ent3"],
                  ["ent2", "ent3"],
                ],
              ],
              [
                15,
                [
                  ["ent2", "ent3"],
                  ["ent2"],
                  ["ent2"],
                ],
              ],
            ],
          },
          {
            key : "condB",
            values : [
              [
                5,
                [
                  ["ent3"],
                  ["ent3"],
                  ["ent3"],
                ],
              ],
              [
                10,
                [
                  ["ent3"],
                  ["ent1", "ent3"],
                  ["ent3"],
                ],
              ],
              [
                15,
                [
                  ["ent3"],
                  [],
                  [],
                ],
              ],
            ],
          },
        ],
      ],
    ],
  },
  targets : [{
    targetId : "tar0",
    entities : ["ent0", "ent1", "ent2", "ent3"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[3],
  title : "4 entities with common values on keys with mixture of equal to, '-ne', '-in', '-!in' and range conditions, with non range conditions at the begining",
}, {
//4
  entities : {
    "ent0" : {
      condition : {
        '-and' : [
          { "condA" : { '-gte' : 10 } },
          { "condA" : { '-lte' : 20 } },
        ],
      },
    },
    "ent1" : {
      condition : {
        "condA" : 5,
      },
    },
    "ent2" : {
      condition : {
        "condA" : { '-gt' : 10 },
      },
    },
    "ent3" : {
      condition : {
        "condA" : { '-ne' : 15 },
      },
    },
    "ent4" : {
      condition : {
        "condA" : 12,
      },
    },
  },
  conditionGroupsMap : {
    "ent0" : [
      conditionGroups[4][0],
    ],
    "ent1" : [
      conditionGroups[4][1],
    ],
    "ent2" : [
      conditionGroups[4][2],
    ],
    "ent3" : [
      conditionGroups[4][3],
    ],
    "ent4" : [
      conditionGroups[4][4],
    ],
  },
  conditionGroups : conditionGroups[4],
  heap : heaps[4],
  meta : {
    key : "condA",
    values : [
      [
        5,
        [
          ["ent3"],
          ["ent1", "ent3"],
          ["ent3"],
        ],
      ],
      [
        10,
        [
          ["ent3"],
          ["ent0", "ent3"],
          ["ent0", "ent2", "ent3"],
        ],
      ],
      [
        12,
        [
          ["ent0", "ent2", "ent3"],
          ["ent0", "ent2", "ent3", "ent4"],
          ["ent0", "ent2", "ent3"],
        ],
      ],
      [
        15,
        [
          ["ent0", "ent2", "ent3"],
          ["ent0", "ent2"],
          ["ent0", "ent2", "ent3"],
        ],
      ],
      [
        20,
        [
          ["ent0", "ent2", "ent3"],
          ["ent0", "ent2", "ent3"],
          ["ent2", "ent3"],
        ],
      ],
    ],
  },
  targets : [{
    targetId : "tar0",
    entities : ["ent0", "ent1", "ent2", "ent3", "ent4"],
  }],
  targetId : "tar0",
  conditionCheckTests : conditionCheckTests[4],
  title : "4 entities with common values on keys with mixture of equal to, '-ne', '-in', '-!in' and range conditions, with range conditions at the begining",
}];
