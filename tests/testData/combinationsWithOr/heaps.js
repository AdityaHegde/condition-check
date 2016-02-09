var conditionGroups = require("./conditionGroups");

module.exports = [
  //0
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : {
      "a" : conditionGroups[0],
    },
    valuesIdxMap : {
      "a" : {
        0 : 1,
      },
    },
    conditionGroups : conditionGroups[0],
  }],
  //1
  [{
    idx : 0,
    weight : 2,
    key : "condA",
    values : {
      "a" : [
        conditionGroups[1][0],
      ],
      "b" : [
        conditionGroups[1][1],
      ],
    },
    valuesIdxMap : {
      "a" : {
        0 : 1,
      },
      "b" : {
        1 : 1,
      },
    },
    conditionGroups : conditionGroups[1],
  }],
  //2
  [{
    idx : 0,
    weight : 3,
    key : "condA",
    values : {
      "a" : [
        conditionGroups[2][0],
      ],
      "b" : [
        conditionGroups[2][1],
      ],
      "c" : [
        conditionGroups[2][2],
      ],
    },
    valuesIdxMap : {
      "a" : {
        0 : 1,
      },
      "b" : {
        1 : 1,
      },
      "c" : {
        2 : 1,
      },
    },
    conditionGroups : conditionGroups[2],
  }],
  //3
  [{
    idx : 0,
    weight : 3,
    key : "condA",
    values : {
      "a" : [
        conditionGroups[3][0],
      ],
      "b" : [
        conditionGroups[3][1],
      ],
      "c" : [
        conditionGroups[3][2],
      ],
    },
    valuesIdxMap : {
      "a" : {
        0 : 1,
      },
      "b" : {
        1 : 1,
      },
      "c" : {
        2 : 1,
      },
    },
    conditionGroups : conditionGroups[3],
  }],
  //4
  [{
    idx : 0,
    weight : 2,
    key : "condA",
    values : {
      "a" : [
        conditionGroups[4][0],
      ],
      "__default__" : [
        conditionGroups[4][1],
      ],
    },
    valuesIdxMap : {
      "a" : {
        0 : 1,
      },
      "__default__" : {
        1 : 1,
      },
    },
    conditionGroups : conditionGroups[4],
  }],
  //5
  [{
    idx : 0,
    weight : 2,
    key : "condA",
    values : {
      "a" : [
        conditionGroups[5][0],
        conditionGroups[5][1],
      ],
      "b" : [],
      "__default__" : [
        conditionGroups[5][1],
      ],
    },
    valuesIdxMap : {
      "a" : {
        0 : 1,
        1 : 1,
      },
      "b" : {},
      "__default__" : {
        1 : 1,
      },
    },
    conditionGroups : conditionGroups[5],
  }],
  //6
  [{
    idx : 0,
    weight : 2,
    key : "condA",
    values : {
      "a" : [
        conditionGroups[6][0],
      ],
      "b" : [],
      "c" : [],
      "__default__" : [
        conditionGroups[6][1],
      ],
    },
    valuesIdxMap : {
      "a" : {
        0 : 1,
      },
      "b" : {},
      "c" : {},
      "__default__" : {
        1 : 1,
      },
    },
    conditionGroups : conditionGroups[6],
  }],
  //7
  [{
    idx : 0,
    weight : 2,
    key : "condA",
    values : {
      "a" : [
        conditionGroups[7][0],
        conditionGroups[7][1],
      ],
      "b" : [],
      "c" : [],
      "__default__" : [
        conditionGroups[7][1],
      ],
    },
    valuesIdxMap : {
      "a" : {
        0 : 1,
        1 : 1,
      },
      "b" : {},
      "c" : {},
      "__default__" : {
        1 : 1,
      },
    },
    conditionGroups : conditionGroups[7],
  }],
  //8
  [{
    idx : 0,
    weight : 5,
    key : "condA",
    values : {
      "a" : [
        conditionGroups[8][0],
        conditionGroups[8][2],
      ],
      "b" : [
        conditionGroups[8][2],
        conditionGroups[8][3],
      ],
      "c" : [
        conditionGroups[8][1],
        conditionGroups[8][4],
      ],
      "__default__" : [
        conditionGroups[8][1],
        conditionGroups[8][2],
      ],
    },
    valuesIdxMap : {
      "a" : {
        0 : 1,
        2 : 1,
      },
      "b" : {
        2 : 1,
        3 : 1,
      },
      "c" : {
        1 : 1,
        4 : 1,
      },
      "__default__" : {
        1 : 1,
        2 : 1,
      },
    },
    conditionGroups : conditionGroups[8],
  }],
];
