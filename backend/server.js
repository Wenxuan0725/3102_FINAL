const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
const Note = require('./models/Note');
const cors = require('cors');

const app = express();
const PORT = 3001; // Set the port directly
app.use(cors());
app.use(express.json());
// MongoDB connection URI
const uri = "mongodb+srv://jwx021466:62OClVyl4Um6iKh2@cluster0.u1pxe6k.mongodb.net/?retryWrites=true";


// const client = new MongoClient(uri);
// async function connectDB() {
//   try {
//     await client.connect();
//     console.log("Connected successfully to MongoDB");
//   } catch (err) {
//     console.error('Failed to connect to MongoDB', err);
//     process.exit(1);
//   }
// }

// connectDB();
mongoose.connect(uri);
app.use("/api/notes", require("./routes/notes"));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello!");
});