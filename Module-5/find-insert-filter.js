// =================================================================

// MongoDB (find, findOne, insertMany, insertOne, )

// MongoDB Find:
// It will return all documents inside the test collection
db.test.find();

// This will return only one document inside the test collection
db.test.findOne();

// This will return only the specified document
db.test.findOne({ gender: "Female" });

// MongoDB Insert:

// This will add/insert one document into the test collection (name, and gender)
db.test.insertOne({ name: "John", gender: "Male" });

// This will add/insert as many as we want document into the test collection
// We will have to provide an array inside of insertMany()
db.test.insertMany([
  { name: "Hasan", gender: "Male" },
  { name: "Sefali", gender: "Female" },
]);

// =================================================================
