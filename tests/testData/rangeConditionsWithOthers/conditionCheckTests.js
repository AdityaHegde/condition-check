var tests = [
  //0
  [{
    value : -Math.pow(2, 32),
    accepted : 0,
  }, {
    value : 12,
    accepted : 0,
  }, {
    value : 15,
    accepted : 1,
  }, {
    value : 17,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
  //1
  [{
    value : -Math.pow(2, 32),
    accepted : 0,
  }, {
    value : 12,
    accepted : 0,
  }, {
    value : 15,
    accepted : 0,
  }, {
    value : 17,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
  //2
  [{
    value : -Math.pow(2, 32),
    accepted : 0,
  }, {
    value : 12,
    accepted : 0,
  }, {
    value : 15,
    accepted : 1,
  }, {
    value : 17,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
  //3
  [{
    value : -Math.pow(2, 32),
    accepted : 0,
  }, {
    value : 12,
    accepted : 0,
  }, {
    value : 15,
    accepted : 0,
  }, {
    value : 17,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
  //4
  [{
    value : -Math.pow(2, 32),
    accepted : 1,
  }, {
    value : 12,
    accepted : 1,
  }, {
    value : 15,
    accepted : 0,
  }, {
    value : 17,
    accepted : 1,
  }, {
    value : 20,
    accepted : 1,
  }, {
    value : 22,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
  //5
  [{
    value : -Math.pow(2, 32),
    accepted : 1,
  }, {
    value  : 7,
    accepted : 1,
  }, {
    value  : 10,
    accepted : 1,
  }, {
    value  : 12,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
  //6
  [{
    value : -Math.pow(2, 32),
    accepted : 1,
  }, {
    value  : 12,
    accepted : 1,
  }, {
    value  : 15,
    accepted : 0,
  }, {
    value  : 17,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
  //7
  [{
    value : -Math.pow(2, 32),
    accepted : 1,
  }, {
    value  : 3,
    accepted : 1,
  }, {
    value  : 5,
    accepted : 0,
  }, {
    value  : 7,
    accepted : 1,
  }, {
    value  : 10,
    accepted : 0,
  }, {
    value  : 12,
    accepted : 1,
  }, {
    value  : 15,
    accepted : 0,
  }, {
    value  : 17,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
  //8
  [{
    value : -Math.pow(2, 32),
    accepted : 0,
  }, {
    value  : 13,
    accepted : 0,
  }, {
    value  : 15,
    accepted : 1,
  }, {
    value  : 17,
    accepted : 0,
  }, {
    value  : 20,
    accepted : 0,
  }, {
    value  : 22,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
  //9
  [{
    value : -Math.pow(2, 32),
    accepted : 0,
  }, {
    value  : 7,
    accepted : 0,
  }, {
    value  : 10,
    accepted : 0,
  }, {
    value  : 12,
    accepted : 0,
  }, {
    value  : 15,
    accepted : 0,
  }, {
    value  : 17,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
  //10
  [{
    value : -Math.pow(2, 32),
    accepted : 1,
  }, {
    value  : 3,
    accepted : 1,
  }, {
    value  : 5,
    accepted : 0,
  }, {
    value  : 7,
    accepted : 1,
  }, {
    value  : 10,
    accepted : 0,
  }, {
    value  : 12,
    accepted : 1,
  }, {
    value  : 15,
    accepted : 0,
  }, {
    value  : 17,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
  //11
  [{
    value : -Math.pow(2, 32),
    accepted : 0,
  }, {
    value  : 12,
    accepted : 0,
  }, {
    value  : 15,
    accepted : 0,
  }, {
    value  : 17,
    accepted : 0,
  }, {
    value  : 20,
    accepted : 0,
  }, {
    value  : 22,
    accepted : 0,
  }, {
    value  : 25,
    accepted : 0,
  }, {
    value  : 27,
    accepted : 0,
  }, {
    value : Math.pow(2, 32),
    accepted : 0,
  }],
];

tests.forEach(function(test) {
  test.forEach(function(subTest) {
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
  });
});

module.exports = tests;
