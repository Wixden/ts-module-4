// =================================================================

// $unset, $pull, $pullAll, $pop

// $unset --> removes the specified field. If the field does not exist, then $unset does nothing
db.test2.updateOne(
  { _id: ObjectId("654fd09741d297c5afb69a40") },
  { $unset: { gender: "" } }
);
// Results: it will remove the gender field form the document.

// $pull --> The $pull operator removes from an existing array all instances of a value or values that match a specified condition.
db.test2.updateOne(
  { _id: ObjectId("654fd09741d297c5afb69a41") },
  { $pull: { skills: "TypeScript" } }
);

// $pullAll --> The $pullAll operator removes all instances of the specified values from an existing array. Unlike the $pull operator that removes elements by specifying a query, $pullAll removes elements that match the listed values.
db.test2.updateOne(
  { _id: ObjectId("654fd09741d297c5afb69a41") },
  { $pullAll: { skills: ["PHP", "TypeScript"] } }
);

// $pop --> The $pop operator operator removes the first or last element of an array. Pass $pop a value of -1 to remove the first element of an array and 1 to remove the last element in an array.
db.test2.updateOne(
  { _id: ObjectId("654fd09741d297c5afb69a41") },
  { $pop: { skills: 1 } }
);

// Results: it will remove the last element

// =================================================================
