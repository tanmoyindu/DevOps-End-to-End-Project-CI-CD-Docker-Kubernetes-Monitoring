from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

# MongoDB connection
mongo_host = os.environ.get("MONGO_HOST", "localhost")
mongo_port = int(os.environ.get("MONGO_PORT", 27017))
client = MongoClient(f"mongodb://{mongo_host}:{mongo_port}/")
db = client.devops_demo  # Database name
collection = db.messages  # Collection name

@app.route("/")
def get_message():
    # Get the latest message
    message_data = collection.find().sort("timestamp", -1).limit(1)
    message = next(message_data, {"message": "No messages found"})["message"]
    return jsonify({"message": message})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
