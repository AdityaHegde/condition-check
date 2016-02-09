var conditionGroups = require("./conditionGroups");

module.exports = [
  //0
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        5,
        [
          conditionGroups[0],
          [],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {
          0 : 1,
        },
        {},
        {},
      ],
    },
    conditionGroups : conditionGroups[0],
  }],
  //1
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        5,
        [
          conditionGroups[1],
          conditionGroups[1],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {
          0 : 1,
        },
        {
          0 : 1,
        },
        {},
      ],
    },
    conditionGroups : conditionGroups[1],
  }],
  //2
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        5,
        [
          [],
          [],
          conditionGroups[2],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {},
        {},
        {
          0 : 1,
        },
      ],
    },
    conditionGroups : conditionGroups[2],
  }],
  //3
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        5,
        [
          [],
          conditionGroups[3],
          conditionGroups[3],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {},
        {
          0 : 1,
        },
        {
          0 : 1,
        },
      ],
    },
    conditionGroups : conditionGroups[3],
  }],
  //4
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        5,
        [
          [],
          conditionGroups[4],
          conditionGroups[4],
        ],
      ],
      [
        10,
        [
          conditionGroups[4],
          conditionGroups[4],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {},
        {
          0 : 1,
        },
        {
          0 : 1,
        },
      ],
      10 : [
        {
          0 : 1,
        },
        {
          0 : 1,
        },
        {},
      ],
    },
    conditionGroups : conditionGroups[4],
  }],
  //5
  [],
  //6
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        5,
        [
          [],
          [],
          conditionGroups[6],
        ],
      ],
      [
        10,
        [
          conditionGroups[6],
          [],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {},
        {},
        {
          0 : 1,
        },
      ],
      10 : [
        {
          0 : 1,
        },
        {},
        {},
      ],
    },
    conditionGroups : conditionGroups[6],
  }],
  //7
  [],
  //8
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        10,
        [
          [],
          [],
          conditionGroups[8],
        ],
      ],
    ],
    valuesIdxMap : {
      10 : [
        {},
        {},
        {
          0 : 1,
        },
      ],
    },
    conditionGroups : conditionGroups[8],
  }],
  //9
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        10,
        [
          [],
          conditionGroups[9],
          conditionGroups[9],
        ],
      ],
    ],
    valuesIdxMap : {
      10 : [
        {},
        {
          0 : 1,
        },
        {
          0 : 1,
        },
      ],
    },
    conditionGroups : conditionGroups[9],
  }],
  //10
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        5,
        [
          conditionGroups[10],
          [],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {
          0 : 1,
        },
        {},
        {},
      ],
    },
    conditionGroups : conditionGroups[10],
  }],
  //11
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        5,
        [
          conditionGroups[11],
          conditionGroups[11],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {
          0 : 1,
        },
        {
          0 : 1,
        },
        {},
      ],
    },
    conditionGroups : conditionGroups[11],
  }],
  //12
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        5,
        [
          [],
          conditionGroups[12],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {},
        {
          0 : 1,
        },
        {},
      ],
    },
    conditionGroups : conditionGroups[12],
  }],
  //13
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        10,
        [
          [],
          [],
          conditionGroups[13],
        ],
      ],
      [
        15,
        [
          conditionGroups[13],
          [],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      10 : [
        {},
        {},
        {
          0 : 1,
        },
      ],
      15 : [
        {
          0 : 1,
        },
        {},
        {},
      ],
    },
    conditionGroups : conditionGroups[13],
  }],
  //14
  [{
    idx : 0,
    weight : 2,
    key : "condA",
    values : [
      [
        5,
        [
          [conditionGroups[14][0]],
          [],
          [],
        ],
      ],
      [
        10,
        [
          [],
          [],
          [conditionGroups[14][1]],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {
          0 : 1,
        },
        {},
        {},
      ],
      10 : [
        {},
        {},
        {
          1 : 1,
        },
      ],
    },
    conditionGroups : conditionGroups[14],
  }],
  //15
  [{
    idx : 0,
    weight : 2,
    key : "condA",
    values : [
      [
        5,
        [
          [],
          [],
          [conditionGroups[15][0]],
        ],
      ],
      [
        10,
        [
          [conditionGroups[15][0]],
          conditionGroups[15],
          [conditionGroups[15][1]],
        ],
      ],
      [
        15,
        [
          [conditionGroups[15][1]],
          [],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {},
        {},
        {
          0 : 1,
        },
      ],
      10 : [
        {
          0 : 1,
        },
        {
          0 : 1,
          1 : 1,
        },
        {
          1 : 1,
        },
      ],
      15 : [
        {
          1 : 1,
        },
        {},
        {},
      ],
    },
    conditionGroups : conditionGroups[15],
  }],
];
