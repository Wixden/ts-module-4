// =================================================================

// delete:
// To delete a document in MongoDB we nee the document ID:
db.test.deleteOne({ _id: ObjectId("654fd09741d297c5afb69a40") });

// Results:
[
  {
    acknowledged: true,
    deletedCount: 1,
  },
];

// create:
// and to create a new collection we need to use createCollection('collectionName')
db.createCollection("name");

// delete entire collection:
// to delete an entire collection we need to use drop({writeConcern: {w: 1}})
db.test.drop({ writeConcern: { w: 1 } });

// =================================================================
