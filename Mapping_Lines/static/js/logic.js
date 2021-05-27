// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30.1975, -90.6664], 5);

//skill drill
let map = L.map('mapid').setView([36.9685, -86.4808], 5);

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085], //LA
//     [37.6213, -122.3790],  //SF
//     [40.7899, -111.9791], //SLC
//     [47.4502, -122.3088]  //SEA
//   ];

//skill drill
let line = [
  [40.6413, -73.7781], //JFK  40.642948, -73.779373
  [30.1975, -97.6664], //AUS
  [43.6777, -79.6248], //YYZ Toronto
  [36.1374, -80.2268]  //winston salem 
];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "yellow"
//   }).addTo(map);

//skill drill
L.polyline(line, {
  color: "blue", 
  opacity: 0.7,
  dashArray: '5,5',
  lineJoin: 'miter',
  lineCap: 'square'
}).addTo(map);
  
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

//new map style: satellite-streets-v11
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

//skilldrill, going back to orig?
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//trying again on skill drill:
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/streets-v11',
    //id: 'mapbox/outdoors-v11',
    id: 'mapbox/light-v10',
    //id: 'mapbox/dark-v10',
    //id: 'mapbox/satellite-v9',
    //id: 'mapbox/satellite-streets-v11',
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);