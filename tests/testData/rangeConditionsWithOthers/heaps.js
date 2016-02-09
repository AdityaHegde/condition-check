var
conditionGroups = require("./conditionGroups");

module.exports = [
  //0
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        15,
        [
          [],
          conditionGroups[0],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      15 : [
        {},
        {
          0 : 1,
        },
        {},
      ],
    },
    conditionGroups : conditionGroups[0],
  }],
  //1
  [],
  //2
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        15,
        [
          [],
          conditionGroups[2],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      15 : [
        {},
        {
          0 : 1,
        },
        {},
      ],
    },
    conditionGroups : conditionGroups[2],
  }],
  //3
  [],
  //4
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        15,
        [
          conditionGroups[4],
          [],
          conditionGroups[4],
        ],
      ],
      [
        20,
        [
          conditionGroups[4],
          conditionGroups[4],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      15 : [
        {
          0 : 1,
        },
        {},
        {
          0 : 1,
        },
      ],
      20 : [
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
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        10,
        [
          conditionGroups[5],
          conditionGroups[5],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
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
    conditionGroups : conditionGroups[5],
  }],
  //6
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        15,
        [
          conditionGroups[6],
          [],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      15 : [
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
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        5,
        [
          conditionGroups[7],
          [],
          conditionGroups[7],
        ],
      ],
      [
        10,
        [
          conditionGroups[7],
          [],
          conditionGroups[7],
        ],
      ],
      [
        15,
        [
          conditionGroups[7],
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
        {
          0 : 1,
        }
      ],
      10 : [
        {
          0 : 1,
        },
        {},
        {
          0 : 1,
        }
      ],
      15 : [
        {
          0 : 1,
        },
        {},
        {},
      ],
    },
    conditionGroups : conditionGroups[7],
  }],
  //8
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : [
      [
        15,
        [
          [],
          conditionGroups[8],
          [],
        ],
      ],
    ],
    valuesIdxMap : {
      15 : [
        {},
        {
          0 : 1,
        },
        {},
      ],
    },
    conditionGroups : conditionGroups[8],
  }],
  //9
  [],
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
          conditionGroups[10],
        ],
      ],
      [
        10,
        [
          conditionGroups[10],
          [],
          conditionGroups[10],
        ],
      ],
      [
        15,
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
        {
          0 : 1,
        }
      ],
      10 : [
        {
          0 : 1,
        },
        {},
        {
          0 : 1,
        }
      ],
      15 : [
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
  [],
];
