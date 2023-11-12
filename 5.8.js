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

// Now we can't always use $set to update a document. because it replace the existing document with the new one. And we lose the previous data. In this case when we want to update the document with new value and also don't want to lose the previous value, we need to use $addToSet. This will add the new value and it will not repeat if the value already exists.
db.test2.updateOne(
  { _id: ObjectId("654fd09741d297c5afb69a41") },
  { $addToSet: { skills: { $each: ["PHP", "TypeScript"] } } }
);

// Results:
[
  {
    acknowledged: true,
    matchedCount: 1,
    modifiedCount: 1,
  },
];

// Results 2: // updating it second time with the same value will not modify the existing document.
[
  {
    acknowledged: true,
    matchedCount: 1,
    modifiedCount: 0,
  },
];

// What if we want to repeat the update event if the value already exist, In this case we will sue the $push operator. This will keep updating/adding the new value to the specified field as much as we want.
db.test2.updateOne(
  { _id: ObjectId("654fd09741d297c5afb69a41") },
  { $push: { skills: { $each: ["PHP", "TypeScript"] } } }
);

// Results:
[
  {
    acknowledged: true,
    matchedCount: 1,
    modifiedCount: 1,
  },
];
// =================================================================
