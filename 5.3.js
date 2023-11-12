// =================================================================

// MongoDB Operators:

// $eq, $neq, $lt, $gt, $gte, $lte:

// $eq --> Equals to
// $eq --> Equals operator: $eq specifies equality condition. The $eq operator matches documents where the value of a field equals the specified value.
db.test.find({ age: { $eq: 18 } }, { age: 1 });

// results:
[
  {
    _id: ObjectId("6406ad63fc13ae5a4000006b"),
    age: 18,
  },
  {
    _id: ObjectId("6406ad64fc13ae5a4000006d"),
    age: 18,
  },
];

// $ne --> Not Equals to
// $ne --> Not Equals operator: $ne selects the documents where the value of the specified field is not equal to the specified value. This includes documents that do not contain the specified field.
db.test.find({ age: { $ne: 18 } }, { age: 1 }).sort({ age: 1 }); //first parameter is our field query, second parameter is which field we want and third parameter is sorting data.
// Results:
[
  ({
    _id: ObjectId("6406ad64fc13ae5a40000081"),
    age: 17,
  },
  {
    _id: ObjectId("6406ad64fc13ae5a40000096"),
    age: 19,
  }),
];

// $gt --> Greater than
// $gt --> Greater that operator: $gt selects those documents where the value of the specified field is greater than (i.e. >) the specified value.
db.test.find({ age: { $gt: 18 } }, { age: 1 }).sort({ age: 1 }); //first parameter is our field query, second parameter is which field we want and third parameter is sorting data.
// Results:
[
  {
    _id: ObjectId("6406ad64fc13ae5a40000096"),
    age: 19,
  },
  {
    _id: ObjectId("6406ad63fc13ae5a40000065"),
    age: 21,
  },
];

// $gte --> Greater than or Equals to
// $gte --> Greater Than or Equals to operator: $gte selects the documents where the value of the specified field is greater than or equal to (i.e. >=) a specified value (e.g. value.)
db.test.find({ age: { $gte: 18 } }, { age: 1 }).sort({ age: 1 }); //first parameter is our field query, second parameter is which field we want and third parameter is sorting data.
// Results:
[
  {
    _id: ObjectId("6406ad64fc13ae5a4000006d"),
    age: 18,
  },
  {
    _id: ObjectId("6406ad64fc13ae5a40000096"),
    age: 19,
  },
];

// $lt --> Less than
// $lt --> Less Than Operator: $lt selects the documents where the value of the field is less than (i.e. <) the specified value.
db.test.find({ age: { $lt: 18 } }, { age: 1 }).sort({ age: 1 }); //first parameter is our field query, second parameter is which field we want and third parameter is sorting data.
// Results:
[
  {
    _id: ObjectId("6406ad64fc13ae5a4000007c"),
    age: 16,
  },
  {
    _id: ObjectId("6406ad64fc13ae5a40000081"),
    age: 17,
  },
];

// $lte --> Less Than or Equal to
// $lte --> Less Than or Equal to Operator: $lte selects the documents where the value of the field is less than or equal to (i.e. <=) the specified value.
db.test.find({ age: { $lte: 18 } }, { age: 1 }).sort({ age: 1 }); //first parameter is our field query, second parameter is which field we want and third parameter is sorting data.
// Results:
[
  {
    _id: ObjectId("6406ad65fc13ae5a400000c7"),
    age: 17,
  },
  {
    _id: ObjectId("6406ad63fc13ae5a4000006b"),
    age: 18,
  },
];

// =================================================================
