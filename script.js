// Switch to the Codetribe database (creates it if it doesn't exist)
use ('Codetribe');

// Create and populate the Facilitators collection
db.Facilitators.insertOne({
    Name: "John Doe",
    Location: "New York",
    Course: "Full-Stack Development"
});

// Create and populate the Trainees collection
db.Trainees.insertOne({
    Name: "Jane Smith",
    Location: "Los Angeles",
    Facilitator: "John Doe"
});

// Create and populate the Projects collection
db.Projects.insertOne({
    Name: "Inventory Management App",
    Course: "Supply Chain",
    Lesson: "Database Integration"
});

// Display all collections to verify insertion
console.log("Facilitators:", db.Facilitators.find().toArray());
console.log("Trainees:", db.Trainees.find().toArray());
console.log("Projects:", db.Projects.find().toArray());


// mongosh < script.js 
//
