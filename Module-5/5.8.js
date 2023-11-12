// =================================================================

// $set, $addToSet, $push

// $set --> When we update a document we pass the updated data to the document by using $set:
// Example:
db.test2.updateOne(
  { _id: ObjectId("654fd09741d297c5afb69a41") },
  { $set: { name: "Huzaifa", age: 30 } }
)[
  // Results:
  {
    acknowledged: true,
    matchedCount: 1,
    modifiedCount: 1,
  }
];

// Example: 2
db.test2.updateOne(
  { _id: ObjectId("654fd09741d297c5afb69a40") },
  { $set: { age: 25 } }
)[
  // Results:
  {
    acknowledged: true,
    matchedCount: 1,
    modifiedCount: 1,
  }
];

// =================================================================
