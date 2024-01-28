// const express = require('express');
// const app = express();
// const port = 3000;
//
// const map = L.map('map').setView([41.6086, 21.7453], 8); // Set the initial view for North Macedonia with latitude, longitude, and zoom level
//
//
// app.get('/mapdata', (req, res) => {
//     const mapData = [
//         { id: 1, name: "Location A", coordinates: [41.6086, 21.7453] },
//         { id: 2, name: "Location B", coordinates: [41.5995, 21.7453] }
//     ];
//
//     res.json(mapData);
// });
//
// app.listen(port, () => {
//     console.log(`Map Service running at http://localhost:${port}`);
// });

// Initialize the map for North Macedonia
const map = L.map('map').setView([41.6086, 21.7453], 8); // Set the initial view for North Macedonia with latitude, longitude, and zoom level

// Add a tile layer to the map (using OpenStreetMap tiles for North Macedonia)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// Add a marker to a specific location in North Macedonia (Skopje, for example)
const marker = L.marker([41.9973, 21.4280]).addTo(map); // Set the marker's position with latitude and longitude

// Add a popup to the marker
marker.bindPopup('Welcome to North Macedonia!').openPopup(); // Set the popup content

// fetch('http://localhost:3000/index')
//     .then(response => response.json())
//     .then(mapInfo => {
//         const map = L.map('map').setView(mapInfo.view, 8);
//         L.tileLayer(mapInfo.tileLayer, {
//             attribution: mapInfo.attribution
//         }).addTo(map);
//
//         const marker = L.marker(mapInfo.marker.position).addTo(map);
//         marker.bindPopup(mapInfo.marker.popupContent).openPopup();
//     })
//     .catch(error => console.error(error));