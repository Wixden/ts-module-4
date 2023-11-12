// =================================================================

// $all , $elemMatch

// $all --> The $all operator selects the documents where the value of a field is an array that contains all the specified elements.
db.test.find({ interests: { $all: ["Travelling", "Gaming", "Cooking"] } })[
  // Results:
  ({
    _id: ObjectId("6406ad64fc13ae5a40000071"),
    interests: ["Travelling", "Cooking", "Gaming"],
  },
  {
    _id: ObjectId("6406ad64fc13ae5a40000087"),
    interests: ["Cooking", "Gaming", "Travelling"],
  },
  {
    _id: ObjectId("6406ad64fc13ae5a40000093"),
    interests: ["Gaming", "Travelling", "Cooking"],
  })
];

// $elemMatch --> The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.
db.test.find(
  { skills: { $elemMatch: { name: "JAVASCRIPT", level: "Intermidiate" } } },
  { skills: 1 }
)[
  // Results:
  ({
    _id: ObjectId("6406ad63fc13ae5a40000069"),
    skills: [
      {
        name: "JAVASCRIPT",
        level: "Intermidiate",
        isLearning: false,
      },
    ],
  },
  {
    _id: ObjectId("6406ad64fc13ae5a4000007b"),
    skills: [
      {
        name: "C#",
        level: "Intermidiate",
        isLearning: false,
      },
    ],
  })
];

// =================================================================
