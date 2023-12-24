
document.addEventListener('DOMContentLoaded', function(){
fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(data => {
        for(var i=0;i<5;i++) {
            const divItem=document.getElementById("item")
            const items = document.getElementById("items");
            const newLi = document.createElement('li');
            const newDiv = document.createElement('div');
            const newsent = document.createElement('p');
            const lat=document.createElement('p')
            const alt=document.createElement('p')
            lat.textContent=data[i].geometry.coordinates[1];
            alt.textContent=data[i].geometry.coordinates[0];
            const newbutton=document.createElement('button');
            newbutton.addEventListener('click',function (event){
                handleClick(event,lat.textContent,alt.textContent);
            });
            newsent.textContent = data[i].properties.name;
            newbutton.textContent="Show on Map"
            newDiv.appendChild(newsent);
            newDiv.appendChild(alt)
            newDiv.appendChild(lat)
            newDiv.appendChild(newbutton)
            newLi.appendChild(newDiv);
            items.appendChild(newLi);
            divItem.appendChild(items)
            document.getElementById("items").appendChild(newLi);
        }
        // Process the retrieved todos

    })
    .catch(error => console.error('Error fetching todos:', error));


// Initialize the map for North Macedonia
    function handleClick(event,lat,alt) {

        const clickedElement=event.target;
        console.log(lat)
        console.log(alt)


        const map = L.map('map').setView([41.6086, 21.7453], 8); // Set the initial view for North Macedonia with latitude, longitude, and zoom level

// Add a tile layer to the map (using OpenStreetMap tiles for North Macedonia)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © OpenStreetMap contributors'
        }).addTo(map);

// Add a marker to a specific location in North Macedonia (Skopje, for example)
        const marker = L.marker([lat,alt]).addTo(map); // Set the marker's position with latitude and longitude

// Add a popup to the marker
       marker.bindPopup('Welcome to North Macedonia!').openPopup(); // Set the popup content

    }});



