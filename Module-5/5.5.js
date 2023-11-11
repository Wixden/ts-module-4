// =================================================================

// $and, $or, implicit vs explicit

// Implicit "AND"
// Implicit AND: When we run two or multiple operations on the same field using ',' comma we call it Implicit AND.
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

// Explicit "AND"
// $and : $and performs a logical AND operation on an array of one or more expressions (<expression1>, <expression2>, and so on) and selects the documents that satisfy all the expressions.
db.test.find({ $and: [{ age: { $gte: 18 } }, { age: { $lte: 30 } }] });
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
  {
    _id: ObjectId("6406ad64fc13ae5a4000006f"),
    age: 26,
  },
];

// Explicit "OR"
// $or : The $or operator performs a logical OR operation on an array of one or more <expressions> and selects the documents that satisfy at least one of the <expressions>.
db.test.find(
  { $or: [{ interests: "Cooking" }, { interests: "Gaming" }] },
  { interests: 1 }
);
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
  {
    _id: ObjectId("6406ad63fc13ae5a40000069"),
    interests: ["Gaming", "Cooking", "Writing"],
  },
];

// Doing the same this as $or using $in
// Implicit "OR"
// $in --> in an array: The $in operator selects the documents where the value of a field equals any value in the specified array.
db.test.find({ "skills.name": { $in: ["JAVASCRIPT", "PYTHON"] } });
// Results:
[
  {
    _id: ObjectId("6406ad63fc13ae5a40000065"),
    skills: [
      {
        name: "PYTHON",
      },
    ],
  },
  {
    _id: ObjectId("6406ad63fc13ae5a40000067"),
    skills: [
      {
        name: "JAVASCRIPT",
      },
    ],
  },
];

// =================================================================
