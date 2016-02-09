var tests = [
  //0
  [{
    //0
    data : {
      condA : "a",
    },
    entities : ["ent0"],
    acceptAt : "ent0",
    accepted : true,
  }, {
    //1
    data : {
      condA : "a",
    },
    entities : ["ent0", "ent1"],
    acceptAt : "ent1",
    accepted : true,
  }, {
    //2
    data : {
      condA : "b",
    },
    entities : ["ent1"],
    acceptAt : "ent0",
    accepted : false,
  }, {
    //3
    data : {
      condA : "b",
    },
    entities : ["ent1"],
    acceptAt : "ent1",
    accepted : true,
  }, {
    //4
    data : {
      condA : "c",
    },
    entities : [],
    acceptAt : "ent0",
    accepted : false,
  }, {
    //5
    data : {
      condA : "c",
    },
    entities : [],
    acceptAt : "ent1",
    accepted : false,
  }],
  //1
  [{
    //0
    data : {
      condA : "a",
      condB : "a",
      condC : "a",
    },
    entities : ["ent0"],
    acceptAt : "ent0",
    accepted : true,
  }, {
    //1
    data : {
      condA : "a",
      condB : "a",
      condC : "a",
    },
    entities : ["ent0"],
    acceptAt : "ent1",
    accepted : false,
  }, {
    //2
    data : {
      condA : "a",
      condB : "a",
      condC : "a",
    },
    entities : ["ent0"],
    acceptAt : "ent2",
    accepted : false,
  }, {
    //3
    data : {
      condA : "a",
      condB : "a",
      condC : "a",
    },
    entities : ["ent0"],
    acceptAt : "ent3",
    accepted : false,
  }, {
    //0
    data : {
      condA : "a",
      condB : "a",
      condC : "b",
    },
    entities : ["ent0"],
    acceptAt : "ent0",
    accepted : true,
  }, {
    //1
    data : {
      condA : "a",
      condB : "a",
      condC : "b",
    },
    entities : ["ent0", "ent1"],
    acceptAt : "ent1",
    accepted : true,
  }, {
    //2
    data : {
      condA : "a",
      condB : "a",
      condC : "b",
    },
    entities : ["ent0", "ent1"],
    acceptAt : "ent2",
    accepted : false,
  }, {
    //3
    data : {
      condA : "a",
      condB : "a",
      condC : "b",
    },
    entities : ["ent0", "ent1"],
    acceptAt : "ent3",
    accepted : false,
  }, {
    //0
    data : {
      condA : "a",
      condB : "a",
      condC : "c",
    },
    entities : ["ent0"],
    acceptAt : "ent0",
    accepted : true,
  }, {
    //1
    data : {
      condA : "a",
      condB : "a",
      condC : "c",
    },
    entities : ["ent0", "ent3"],
    acceptAt : "ent1",
    accepted : false,
  }, {
    //2
    data : {
      condA : "a",
      condB : "a",
      condC : "c",
    },
    entities : ["ent0", "ent3"],
    acceptAt : "ent2",
    accepted : false,
  }, {
    //3
    data : {
      condA : "a",
      condB : "a",
      condC : "c",
    },
    entities : ["ent0", "ent3"],
    acceptAt : "ent3",
    accepted : true,
  }, {
    //0
    data : {
      condA : "b",
      condB : "a",
      condC : "c",
    },
    entities : ["ent2", "ent3"],
    acceptAt : "ent0",
    accepted : false,
  }, {
    //1
    data : {
      condA : "b",
      condB : "a",
      condC : "c",
    },
    entities : ["ent2", "ent3"],
    acceptAt : "ent1",
    accepted : false,
  }, {
    //2
    data : {
      condA : "b",
      condB : "a",
      condC : "c",
    },
    entities : ["ent2"],
    acceptAt : "ent2",
    accepted : true,
  }, {
    //3
    data : {
      condA : "b",
      condB : "a",
      condC : "c",
    },
    entities : ["ent2", "ent3"],
    acceptAt : "ent3",
    accepted : true,
  }],
  //2
  //TODO : do the rest
  [
  ],
  //3
  [
  ],
  //4
  [
  ],
];

tests.forEach(function(test) {
  test.forEach(function(subTest) {
    if(subTest.value) {
      subTest.title = "'condA' = '" + subTest.value + "'";
      subTest.data = {
        "condA" : subTest.value,
      };
      subTest.acceptAt = "ent0";
      if(subTest.accepted === 1) {
        subTest.entities = ["ent0"];
      }
      else {
        subTest.entities = [];
      }
      delete subTest.value;
      delete subTest.accepted;
    }
    else if(subTest.data) {
      subTest.title = Object.keys(subTest.data).sort().map(function(key) {
        return "'" + key + "' = '" + subTest.data[key] + "'";
      }).join(", ") + " and accept at '" + subTest.acceptAt + "'";
    }
  });
});

module.exports = tests;
