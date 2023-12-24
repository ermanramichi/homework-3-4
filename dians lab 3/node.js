const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// MongoDB Connection URL
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/getData', async (req, res) => {
    try {
        // Connect to MongoDB
        await client.connect();

        const database = client.db('yourDatabaseName');
        const collection = database.collection('yourCollection');

        // Fetch data from MongoDB
        const documents = await collection.find({ /* Your query criteria */ }).toArray();

        // Send the data as a JSON response to the client
        res.json(documents);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
