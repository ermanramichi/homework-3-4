// // data-service.js
// const express = require('express');
// const fetch = require('node-fetch');
//
// const app = express();
// const PORT = process.env.PORT || 3000;
//
// app.get('/data', (req, res) => {
//     // Fetch data from the server
//     fetch('http://localhost:3001/data')
//         .then(response => response.json())
//         .then(data => res.json(data))
//         .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
// });
//
// app.listen(PORT, () => {
//     console.log(`Data Service running on port ${PORT}`);
// });



// map-service.js
const express = require('express');
const L = require('leaflet');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public')); // Serve static files

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
    res.send('This is the About page');
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact page');
});

app.get('/gallery', (req, res) => {
    res.send('This is the Gallery page');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Map Service running on port ${PORT}`);
});