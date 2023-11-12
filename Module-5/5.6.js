// =================================================================

//  $exists, $type,$size

// $exist --> The specified field exist in the document: The $exists operator matches documents that contain or do not contain a specified field, including documents where the field value is null.
db.test.find({ age: { $exists: true } }); //true means field exists
// Results:
[
  ({
    _id: ObjectId("6406ad63fc13ae5a40000065"),
    age: 21,
  },
  {
    _id: ObjectId("6406ad63fc13ae5a40000066"),
    age: 12,
  },
  {
    _id: ObjectId("6406ad63fc13ae5a40000067"),
    age: 38,
  }),
];

// False results will return empty array if nothing found
db.test.find({ age: { $exists: false } }); //false means field does not exist
// Nothing found []

// $type --> will return matching field type: $type selects documents where the value of the field is an instance of the specified BSON type(s). Querying by data type is useful when dealing with highly unstructured data where data types are not predictable.
db.test.find({ age: { $type: "string" } });
// Results:
[
  {
    _id: ObjectId("6406ad65fc13ae5a400000c6"),
    age: "45",
  },
];

// Results 2:
db.test.find({ company: { $type: "null" } }, { company: 1 })[
  {
    _id: ObjectId("6406ad65fc13ae5a400000c6"),
    company: null,
  }
];

// Array Query
// Finding all document with array size:
// $size --> returns all that matches the specified size of an array:

db.test.find({ friends: { $size: 0 } }, { friends: 1 }).sort({ age: 1 });
// Results:
[
  {
    _id: ObjectId("6406ad65fc13ae5a400000c6"),
    age: "45",
    friends: [],
  },
];

// =================================================================
