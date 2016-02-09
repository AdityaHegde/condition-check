var
conditionGroups = require("./conditionGroups");

module.exports = [
  //0
  [{
    idx : 0,
    weight : 3,
    key : "condA",
    values : {
      a : [
        conditionGroups[0][0],
        conditionGroups[0][1],
      ],
      b : [
        conditionGroups[0][2],
      ],
    },
    valuesIdxMap : {
      a : {
        0 : 1,
        1 : 1,
      },
      b : {
        2 : 1,
      },
    },
    conditionGroups : conditionGroups[0],
  }],
  //1
  [{
    idx : 0,
    weight : 3,
    key : "condA",
    values : {
      a : [
        conditionGroups[1][0],
        conditionGroups[1][1],
      ],
      b : [
        conditionGroups[1][2],
      ],
      __default__ : [],
    },
    valuesIdxMap : {
      a : {
        0 : 1,
        1 : 1,
      },
      b : {
        2 : 1,
      },
      __default__ : {},
    },
    conditionGroups : [
      conditionGroups[1][0],
      conditionGroups[1][1],
      conditionGroups[1][2],
    ],
  }, {
    idx : 0,
    weight : 2,
    key : "condB",
    values : {
      a : [
        conditionGroups[1][0],
        conditionGroups[1][1],
      ],
      __default__ : [],
    },
    valuesIdxMap : {
      a : {
        0 : 1,
        1 : 1,
      },
      __default__ : {},
    },
    conditionGroups : [
      conditionGroups[1][0],
      conditionGroups[1][1],
    ],
  }, {
    idx : 1,
    weight : 3,
    key : "condC",
    values : {
      b : [
        conditionGroups[1][1],
      ],
      c : [
        conditionGroups[1][2],
        conditionGroups[1][3],
      ],
    },
    valuesIdxMap : {
      b : {
        1 : 1,
      },
      c : {
        2 : 1,
        3 : 1,
      },
    },
    conditionGroups : [
      conditionGroups[1][1],
      conditionGroups[1][2],
      conditionGroups[1][3],
    ],
  }],
  //2
  [{
    idx : 0,
    weight : 4,
    key : "condA",
    values : {
      a : [
        conditionGroups[2][0],
      ],
      b : [
        conditionGroups[2][1],
        conditionGroups[2][2],
        conditionGroups[2][3],
      ],
      __default__ : [
        conditionGroups[2][2],
      ],
    },
    valuesIdxMap : {
      a : {
        0 : 1,
      },
      b : {
        1 : 1,
        2 : 1,
        3 : 1,
      },
      __default__ : {
        2 : 1,
      },
    },
    conditionGroups : [
      conditionGroups[2][0],
      conditionGroups[2][1],
      conditionGroups[2][2],
      conditionGroups[2][3],
    ],
  }, {
    idx : 0,
    weight : 3,
    key : "condB",
    values : {
      a : [
        conditionGroups[2][0],
        conditionGroups[2][1],
        conditionGroups[2][2],
      ],
      __default__ : [],
    },
    valuesIdxMap : {
      a : {
        0 : 1,
        1 : 1,
        2 : 1,
      },
      __default__ : {},
    },
    conditionGroups : [
      conditionGroups[2][0],
      conditionGroups[2][1],
      conditionGroups[2][2],
    ],
  }, {
    idx : 2,
    weight : 3,
    key : "condC",
    values : {
      b : [
        conditionGroups[2][2],
      ],
      c : [
        conditionGroups[2][3],
      ],
      __default__ : [
        conditionGroups[2][4],
      ],
    },
    valuesIdxMap : {
      b : {
        2 : 1,
      },
      c : {
        3 : 1,
      },
      __default__ : {
        4 : 1,
      },
    },
    conditionGroups : [
      conditionGroups[2][2],
      conditionGroups[2][3],
      conditionGroups[2][4],
    ],
  }],
  //3
  [{
    idx : 0,
    weight : 5,
    key : "condA",
    values : [
      [
        5,
        [
          [
            conditionGroups[3][2],
            conditionGroups[3][4],
          ],
          [
            conditionGroups[3][2],
            conditionGroups[3][3],
          ],
          [
            conditionGroups[3][2],
            conditionGroups[3][3],
            conditionGroups[3][4],
          ],
        ],
      ],
      [
        10,
        [
          [
            conditionGroups[3][2],
            conditionGroups[3][3],
            conditionGroups[3][4],
          ],
          [
            conditionGroups[3][0],
            conditionGroups[3][3],
          ],
          [
            conditionGroups[3][2],
            conditionGroups[3][3],
            conditionGroups[3][4],
          ],
        ],
      ],
      [
        15,
        [
          [
            conditionGroups[3][2],
            conditionGroups[3][3],
            conditionGroups[3][4],
          ],
          [
            conditionGroups[3][1],
            conditionGroups[3][2],
            conditionGroups[3][3],
            conditionGroups[3][4],
          ],
          [
            conditionGroups[3][2],
            conditionGroups[3][3],
            conditionGroups[3][4],
          ],
        ],
      ],
      [
        20,
        [
          [
            conditionGroups[3][2],
            conditionGroups[3][3],
            conditionGroups[3][4],
          ],
          [
            conditionGroups[3][2],
            conditionGroups[3][3],
            conditionGroups[3][4],
          ],
          [
            conditionGroups[3][2],
            conditionGroups[3][4],
          ],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {
          2 : 1,
          4 : 1,
        },
        {
          2 : 1,
          3 : 1,
        },
        {
          2 : 1,
          3 : 1,
          4 : 1,
        },
      ],
      10 : [
        {
          2 : 1,
          3 : 1,
          4 : 1,
        },
        {
          0 : 1,
          3 : 1,
        },
        {
          2 : 1,
          3 : 1,
          4 : 1,
        },
      ],
      15 : [
        {
          2 : 1,
          3 : 1,
          4 : 1,
        },
        {
          1 : 1,
          2 : 1,
          3 : 1,
          4 : 1,
        },
        {
          2 : 1,
          3 : 1,
          4 : 1,
        },
      ],
      20 : [
        {
          2 : 1,
          3 : 1,
          4 : 1,
        },
        {
          2 : 1,
          3 : 1,
          4 : 1,
        },
        {
          2 : 1,
          4 : 1,
        },
      ],
    },
    conditionGroups : conditionGroups[3],
  }, {
    idx : 0,
    key : "condB",
    weight : 5,
    values : [
      [
        5,
        [
          [
            conditionGroups[3][4],
          ],
          [
            conditionGroups[3][0],
            conditionGroups[3][1],
            conditionGroups[3][4],
          ],
          [
            conditionGroups[3][4],
          ],
        ],
      ],
      [
        10,
        [
          [
            conditionGroups[3][4],
          ],
          [
            conditionGroups[3][2],
            conditionGroups[3][4],
          ],
          [
            conditionGroups[3][3],
            conditionGroups[3][4],
          ],
        ],
      ],
      [
        15,
        [
          [
            conditionGroups[3][3],
            conditionGroups[3][4],
          ],
          [
            conditionGroups[3][3],
          ],
          [
            conditionGroups[3][3],
          ],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {
          4 : 1,
        },
        {
          0 : 1,
          1 : 1,
          4 : 1,
        },
        {
          4 : 1,
        },
      ],
      10 : [
        {
          4 : 1,
        },
        {
          2 : 1,
          4 : 1,
        },
        {
          3 : 1,
          4 : 1,
        },
      ],
      15 : [
        {
          3 : 1,
          4 : 1,
        },
        {
          3 : 1,
        },
        {
          3 : 1,
        },
      ],
    },
    conditionGroups : conditionGroups[3],
  }],
  //4
  [{
    idx : 0,
    key : "condA",
    weight : 5,
    values : [
      [
        5,
        [
          [
            conditionGroups[4][3],
          ],
          [
            conditionGroups[4][1],
            conditionGroups[4][3],
          ],
          [
            conditionGroups[4][3],
          ],
        ],
      ],
      [
        10,
        [
          [
            conditionGroups[4][3],
          ],
          [
            conditionGroups[4][0],
            conditionGroups[4][3],
          ],
          [
            conditionGroups[4][0],
            conditionGroups[4][2],
            conditionGroups[4][3],
          ],
        ],
      ],
      [
        12,
        [
          [
            conditionGroups[4][0],
            conditionGroups[4][2],
            conditionGroups[4][3],
          ],
          [
            conditionGroups[4][0],
            conditionGroups[4][2],
            conditionGroups[4][3],
            conditionGroups[4][4],
          ],
          [
            conditionGroups[4][0],
            conditionGroups[4][2],
            conditionGroups[4][3],
          ],
        ],
      ],
      [
        15,
        [
          [
            conditionGroups[4][0],
            conditionGroups[4][2],
            conditionGroups[4][3],
          ],
          [
            conditionGroups[4][0],
            conditionGroups[4][2],
          ],
          [
            conditionGroups[4][0],
            conditionGroups[4][2],
            conditionGroups[4][3],
          ],
        ],
      ],
      [
        20,
        [
          [
            conditionGroups[4][0],
            conditionGroups[4][2],
            conditionGroups[4][3],
          ],
          [
            conditionGroups[4][0],
            conditionGroups[4][2],
            conditionGroups[4][3],
          ],
          [
            conditionGroups[4][2],
            conditionGroups[4][3],
          ],
        ],
      ],
    ],
    valuesIdxMap : {
      5 : [
        {
          3 : 1,
        },
        {
          1 : 1,
          3 : 1,
        },
        {
          3 : 1,
        },
      ],
      10 : [
        {
          3 : 1,
        },
        {
          0 : 1,
          3 : 1,
        },
        {
          0 : 1,
          2 : 1,
          3 : 1,
        },
      ],
      12 : [
        {
          0 : 1,
          2 : 1,
          3 : 1,
        },
        {
          0 : 1,
          2 : 1,
          3 : 1,
          4 : 1,
        },
        {
          0 : 1,
          2 : 1,
          3 : 1,
        },
      ],
      15 : [
        {
          0 : 1,
          2 : 1,
          3 : 1,
        },
        {
          0 : 1,
          2 : 1,
        },
        {
          0 : 1,
          2 : 1,
          3 : 1,
        },
      ],
      20 : [
        {
          0 : 1,
          2 : 1,
          3 : 1,
        },
        {
          0 : 1,
          2 : 1,
          3 : 1,
        },
        {
          2 : 1,
          3 : 1,
        },
      ],
    },
    conditionGroups : conditionGroups[4],
  }],
];
