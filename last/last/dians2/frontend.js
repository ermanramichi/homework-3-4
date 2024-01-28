//
// document.addEventListener('DOMContentLoaded', function(){
// fetch('http://localhost:3000/data')
//     .then(response => response.json())
//     .then(data => {
//         for(var i=0;i<5;i++) {
//             const divItem=document.getElementById("item")
//             const items = document.getElementById("items");
//             const newLi = document.createElement('li');
//             const newDiv = document.createElement('div');
//             const newsent = document.createElement('p');
//             const lat=document.createElement('p')
//             const alt=document.createElement('p')
//             lat.textContent=data[i].geometry.coordinates[1];
//             alt.textContent=data[i].geometry.coordinates[0];
//             const newbutton=document.createElement('button');
//             newbutton.addEventListener('click',function (event){
//                 handleClick(event,lat.textContent,alt.textContent);
//             });
//             newsent.textContent = data[i].properties.name;
//             newbutton.textContent="Show on Map"
//             newDiv.appendChild(newsent);
//             newDiv.appendChild(alt)
//             newDiv.appendChild(lat)
//             newDiv.appendChild(newbutton)
//             newLi.appendChild(newDiv);
//             items.appendChild(newLi);
//             divItem.appendChild(items)
//             document.getElementById("items").appendChild(newLi);
//         }
//         // Process the retrieved todos
//
//     })
//     .catch(error => console.error('Error fetching todos:', error));
//
//
// // Initialize the map for North Macedonia
//     function handleClick(event,lat,alt) {
//
//         const clickedElement=event.target;
//         console.log(lat)
//         console.log(alt)
//
//
//         const map = L.map('map').setView([41.6086, 21.7453], 8); // Set the initial view for North Macedonia with latitude, longitude, and zoom level
//
// // Add a tile layer to the map (using OpenStreetMap tiles for North Macedonia)
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: 'Map data © OpenStreetMap contributors'
//         }).addTo(map);
//
// // Add a marker to a specific location in North Macedonia (Skopje, for example)
//         const marker = L.marker([lat,alt]).addTo(map); // Set the marker's position with latitude and longitude
//
// // Add a popup to the marker
//        marker.bindPopup('Welcome to North Macedonia!').openPopup(); // Set the popup content
//
//     }});


//Refactoring with the STRATEGY PATTERN
class DataProcessingStrategy {
    processData(data) {
        throw new Error('processData method must be implemented');
    }
}

class MapDataProcessing extends DataProcessingStrategy {
    processData(data) {
        const itemsContainer = document.getElementById("items");
        data.slice(0, 5).forEach(item => {
            const listItem = this.createListItem(item);
            itemsContainer.appendChild(listItem);
        });
    }

    createListItem(item) {
        const newLi = document.createElement('li');
        const newDiv = document.createElement('div');
        const nameParagraph = document.createElement('p');
        const latParagraph = document.createElement('p');
        const lngParagraph = document.createElement('p');
        const showOnMapButton = document.createElement('button');

        nameParagraph.textContent = item.properties.name;
        latParagraph.textContent = item.geometry.coordinates[1];
        lngParagraph.textContent = item.geometry.coordinates[0];
        showOnMapButton.textContent = "Show on Map";
        showOnMapButton.addEventListener('click', () => app.handleMapClick(latParagraph.textContent, lngParagraph.textContent));

        newDiv.appendChild(nameParagraph);
        newDiv.appendChild(latParagraph);
        newDiv.appendChild(lngParagraph);
        newDiv.appendChild(showOnMapButton);
        newLi.appendChild(newDiv);

        return newLi;
    }
}

class MapInteractionStrategy {
    handleMapInteraction(lat, lng) {
        throw new Error('handleMapInteraction method must be implemented');
    }
}

class LeafletMapInteraction extends MapInteractionStrategy {
    handleMapInteraction(lat, lng) {
        const map = L.map('map').setView([lat, lng], 8);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © OpenStreetMap contributors'
        }).addTo(map);

        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup('Coordinates: ' + lat + ', ' + lng+" Welcome to North Macedonia").openPopup();
    }
}
class MapApplication {
    constructor(dataStrategy, interactionStrategy) {
        this.dataStrategy = dataStrategy;
        this.interactionStrategy = interactionStrategy;
    }

    fetchData() {
        fetch('http://localhost:3000/data')
            .then(response => response.json())
            .then(data => this.dataStrategy.processData(data))
            .catch(error => console.error('Error:', error));
    }

    handleMapClick(lat, lng) {
        this.interactionStrategy.handleMapInteraction(lat, lng);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const dataStrategy = new MapDataProcessing();
    const interactionStrategy = new LeafletMapInteraction();
    const app = new MapApplication(dataStrategy, interactionStrategy);

    app.fetchData();
});

let app; // Global reference

document.addEventListener('DOMContentLoaded', function() {
    const dataStrategy = new MapDataProcessing();
    const interactionStrategy = new LeafletMapInteraction();
    app = new MapApplication(dataStrategy, interactionStrategy);

    app.fetchData();
});

