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
