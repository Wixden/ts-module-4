// db.test.find({}, {skills: 1})

// 1. Find all documents in the collection where the age is greater than 30, and only return the name and email fields.
// db.test.find({age: {$gt: 30}}, {name: 1, email: 1})

// 2. Find documents where the favorite color is either "Maroon" or "Blue."
// db.test.find({favoutiteColor: {$in: ["Maroon", "Blue"]}}, {favoutiteColor: 1})

// 3. Find all documents where the skills is an empty array.
db.test.find({ skills: { $size: 0 } }, { skills: 1 }).sort({ skills: -1 });

// 4. Find documents where the person has skills in both "JavaScript" and "Java."
db.test.find({ "skills.name": { $all: ["JAVASCRIPT", "JAVA"] } });

// 5. Add a new skill to the skills array for the document with the email "aminextleveldeveloper@gmail.com" The skill is {"name": "Kotlin", "level": "Expert", "isLearning": true}.
db.test.updateOne(
  { email: "mdangl1@odnoklassniki.ru" },
  {
    $addToSet: {
      skills: {
        $each: [{ name: "Kotlin", level: "Expert", isLearning: true }],
      },
    },
  }
);

// 6. Add a new language "Spanish" to the list of languages spoken by the person.
// db.test.find({}, {languages: 1})
db.test.updateMany({}, { $addToSet: { languages: { $each: ["Spanish"] } } });

// 7. Remove the skill with the name "Kotlin" from the skills array.
// db.test.find({}, {skills:1})
db.test.updateMany({}, { $pull: { skills: { name: "Kotlin" } } });
