const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/map', (req, res) => {
    // Provide the map and marker information as JSON
    const mapInfo = {
        view: [41.6086, 21.7453],
        tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: 'Map data © OpenStreetMap contributors',
        marker: {
            position: [41.9973, 21.4280],
            popupContent: 'Welcome to North Macedonia!'
        }
    };
    res.json(mapInfo);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
