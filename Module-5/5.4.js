// =================================================================

// MongoDB Operators:

// $in, $nin:

// $in --> in an array:
// $in --> in an array: The $in operator selects the documents where the value of a field equals any value in the specified array.
db.test.find({ interests: { $in: ["Cooking", "Gaming"] } }, { interests: 1 });
// Results:
[
  {
    _id: ObjectId("6406ad63fc13ae5a40000065"),
    interests: ["Cooking", "Writing", "Reading"],
  },
  {
    _id: ObjectId("6406ad63fc13ae5a40000066"),
    interests: ["Travelling", "Gaming", "Reading"],
  },
];

// $nin --> Not in an array:
// $nin --> in an array: $nin selects the documents where: the specified field value is not in the specified array or the specified field does not exist.
db.test.find({ interests: { $nin: ["Cooking", "Gaming"] } }, { interests: 1 });
// Results:
[
  {
    _id: ObjectId("6406ad63fc13ae5a40000067"),
    interests: ["Writing", "Gardening", "Travelling"],
  },
  {
    _id: ObjectId("6406ad63fc13ae5a40000068"),
    interests: ["Writing", "Reading", "Gardening"],
  },
];

// Implicit AND: When we run two operations on the same field we call it Implicit AND.
db.test.find({ age: { $gte: 18, $lte: 30 } }, { age: 1 });
// Results:
[
  {
    _id: ObjectId("6406ad63fc13ae5a40000065"),
    age: 21,
  },
  {
    _id: ObjectId("6406ad63fc13ae5a4000006b"),
    age: 18,
  },
];

// =================================================================
