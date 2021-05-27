
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

//base layer options
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
     id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

// add base tile layer to the map
streets.addTo(map);

//unclear which option:
// 1. major airports on main branch
// let airportData = "https://raw.githubusercontent.com/DeliaDavila/Mapping_Earthquakes/main/majorAirports.json";

// 2. major airports on geo json branch
let airportData = "https://raw.githubusercontent.com/DeliaDavila/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});