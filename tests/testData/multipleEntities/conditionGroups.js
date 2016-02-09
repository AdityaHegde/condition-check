module.exports = [
  //0
  [{
    entityId : "ent0",
    keys : {
      "condA" : "a",
    },
    keyvalues : {
      "condA__a" : 1,
    },
  }, {
    entityId : "ent1",
    keys : {
      "condA" : "a",
    },
    keyvalues : {
      "condA__a" : 1,
    },
  }, {
    entityId : "ent1",
    keys : {
      "condA" : "b",
    },
    keyvalues : {
      "condA__b" : 1,
    },
  }],
  //1
  [{
    entityId : "ent0",
    keys : {
      "condA" : "a",
      "condB" : "a",
    },
    keyvalues : {
      "condA__a" : 1,
      "condB__a" : 1,
    },
  }, {
    entityId : "ent1",
    keys : {
      "condA" : "a",
      "condB" : "a",
      "condC" : "b",
    },
    keyvalues : {
      "condA__a" : 1,
      "condB__a" : 1,
      "condC__b" : 1,
    },
  }, {
    entityId : "ent2",
    keys : {
      "condA" : "b",
      "condC" : "c",
    },
    keyvalues : {
      "condA__b" : 1,
      "condC__c" : 1,
    },
  }, {
    entityId : "ent3",
    keys : {
      "condC" : "c",
    },
    keyvalues : {
      "condC__c" : 1,
    },
  }],
  //2
  [{
    entityId : "ent0",
    keys : {
      "condA" : "a",
      "condB" : "a",
    },
    keyvalues : {
      "condA__a" : 1,
      "condB__a" : 1,
    },
  }, {
    entityId : "ent0",
    keys : {
      "condA" : "b",
      "condB" : "a",
    },
    keyvalues : {
      "condA__b" : 1,
      "condB__a" : 1,
    },
  }, {
    entityId : "ent1",
    keys : {
      "condA" : {
        "a" : 1,
      },
      "condB" : "a",
      "condC" : "b",
    },
    keyvalues : {
      "condA__a" : 2,
      "condB__a" : 1,
      "condC__b" : 1,
    },
  }, {
    entityId : "ent2",
    keys : {
      "condA" : "b",
      "condC" : "c",
    },
    keyvalues : {
      "condA__b" : 1,
      "condC__c" : 1,
    },
  }, {
    entityId : "ent3",
    keys : {
      "condC" : {
        "b" : 1,
        "c" : 1,
      },
    },
    keyvalues : {
      "condC__b" : 2,
      "condC__c" : 2,
    },
  }],
  //3
  [{
    entityId : "ent0",
    keys : {
      "condA" : 10,
      "condB" : 5,
    },
    keyvalues : {
      "condA__10" : 1,
      "condB__5" : 1,
    },
  }, {
    entityId : "ent0",
    keys : {
      "condA" : 15,
      "condB" : 5,
    },
    keyvalues : {
      "condA__15" : 1,
      "condB__5" : 1,
    },
  }, {
    entityId : "ent1",
    keys : {
      "condA" : {
        10 : 1,
      },
      "condB" : 10,
    },
    keyvalues : {
      "condA__10" : 2,
      "condB__10" : 1,
    },
  }, {
    entityId : "ent2",
    keys : {
      "condA" : [
        [5, 3],
        [20, 6],
      ],
      "condB" : [
        [10, 1],
      ],
    },
    keyvalues : {},
  }, {
    entityId : "ent3",
    keys : {
      "condA" : {
        5 : 1,
        10 : 1,
      },
      "condB" : [
        [15, 4],
      ],
    },
    keyvalues : {
      "condA__5" : 2,
      "condA__10" : 2,
    },
  }],
  //4
  [{
    entityId : "ent0",
    keys : {
      "condA" : [
        [10, 3],
        [20, 6],
      ],
    },
    keyvalues : {},
  }, {
    entityId : "ent1",
    keys : {
      "condA" : 5,
    },
    keyvalues : {
      "condA__5" : 1,
    },
  }, {
    entityId : "ent2",
    keys : {
      "condA" : [
        [10, 1],
      ],
    },
    keyvalues : {},
  }, {
    entityId : "ent3",
    keys : {
      "condA" : {
        15 : 1,
      },
    },
    keyvalues : {
      "condA__15" : 2,
    },
  }, {
    entityId : "ent4",
    keys : {
      "condA" : 12,
    },
    keyvalues : {
      "condA__12" : 1,
    },
  }],
];
