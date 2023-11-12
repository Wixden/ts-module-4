// =================================================================

// $set --> replace the existing value with the new value:
db.test.updateOne(
  { _id: ObjectId("6406ad65fc13ae5a400000c7") },
  {
    $set: {
      "address.city": "Santa Rita Village",
      "address.postalCode": "96910 SRV",
    },
  }
);

// How to update a property from an array of object in MongoDB:

// Example:
db.students.insertMany([
  { _id: 1, grades: [85, 80, 80] },
  { _id: 2, grades: [88, 90, 92] },
  { _id: 3, grades: [85, 100, 90] },
]);

// To update the first element whose value is 80 to 82 in the in the grades array, use the positional $ operator if you do not know the position of the element in the array:

db.students.updateOne({ _id: 1, grades: 80 }, { $set: { "grades.$": 82 } });

// =================================================================
