const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017"; // MongoDB URL
const dbName = "devops_demo"; // Database name

async function initDB() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const db = client.db(dbName);

    // Create a collection and insert sample data
    const collection = db.collection("messages");

    const sampleData = [
      { message: "Hello from DevOps project!", timestamp: new Date() },
      { message: "This is a sample database entry.", timestamp: new Date() },
    ];

    const result = await collection.insertMany(sampleData);
    console.log(`${result.insertedCount} documents inserted`);
  } catch (err) {
    console.error("Error initializing database:", err);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

initDB();
