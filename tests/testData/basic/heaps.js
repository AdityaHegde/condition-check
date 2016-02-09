var
conditionGroups = require("./conditionGroups");

module.exports = [
  //0
  [],
  //1
  [{
    idx : 0,
    weight : 0,
    conditionGroup : conditionGroups[1][0],
  }],
  //2
  [{
    idx : 0,
    weight : 0,
    conditionGroup : conditionGroups[2][0],
  }],
  //3
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : {
      a : [
        conditionGroups[3][0],
      ],
    },
    valuesIdxMap : {
      a : {
        0 : 1,
      },
    },
    conditionGroups : conditionGroups[3],
  }],
  //4
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : {
      a : [
        conditionGroups[4][0],
      ],
      __default__ : [],
    },
    valuesIdxMap : {
      a : {
        0 : 1,
      },
      __default__ : {},
    },
    conditionGroups : conditionGroups[4],
  }, {
    idx : 0,
    weight : 1,
    key : "condB",
    values : {
      b : [
        conditionGroups[4][0],
      ],
    },
    valuesIdxMap : {
      b : {
        0 : 1,
      },
    },
    conditionGroups : conditionGroups[4],
  }],
  //5
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : {
      a : [
        conditionGroups[5][0],
      ],
      __default__ : [],
    },
    valuesIdxMap : {
      a : {
        0 : 1,
      },
      __default__ : {},
    },
    conditionGroups : [
      conditionGroups[5][0],
    ],
  }, {
    idx : 1,
    weight : 1,
    key : "condB",
    values : {
      b : [
        conditionGroups[5][1],
      ],
    },
    valuesIdxMap : {
      b : {
        1 : 1,
      },
    },
    conditionGroups : [
      conditionGroups[5][1],
    ],
  }],
  //6
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : {
      a : [],
      __default__ : [
        conditionGroups[6][0],
      ],
    },
    valuesIdxMap : {
      a : {},
      __default__ : {
        0 : 1,
      },
    },
    conditionGroups : conditionGroups[6],
  }],
  //7
  [{
    idx : 0,
    weight : 3,
    key : "condA",
    values : {
      a : [
        conditionGroups[7][0],
      ],
      b : [
        conditionGroups[7][1],
      ],
      c : [
        conditionGroups[7][2],
      ],
    },
    valuesIdxMap : {
      a : {
        0 : 1,
      },
      b : {
        1 : 1,
      },
      c : {
        2 : 1,
      },
    },
    conditionGroups : conditionGroups[7],
  }],
  //8
  [{
    idx : 0,
    weight : 1,
    key : "condA",
    values : {
      a : [],
      b : [],
      c : [],
      __default__ : [
        conditionGroups[8][0],
      ],
    },
    valuesIdxMap : {
      a : {},
      b : {},
      c : {},
      __default__ : {
        0 : 1,
      },
    },
    conditionGroups : conditionGroups[8],
  }],
];
