//base layer option "streets"
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  accessToken: API_KEY
});

//base layer option "dark"
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
{
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/dark-v10',
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//trying major airports on main branch
let airportData = "https://raw.githubusercontent.com/DeliaDavila/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    //console.log(data);

    // console.log(data.type); //Just the words "feature collection"
  // console.log(data.features.properties); //no error, just 'undefined' and no log
  // console.log(data.features); //that got features with subs geometry and properties
  console.log(data.features.faa); //undefined I think you'd have to loop

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});

// Grabbing our GeoJSON data. SKILL DRILL, airport code and airport name 
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data)
//   // .bindPopup("<h2>Airport Code: " + data.faa + "</h2> <hr> <h3>Airport Name: " + data.name + "</h3>")
//   // .bindPopup("<h2>Airport Code: " + airportData.faa + "</h2> <hr> <h3>Airport Name: " + airportData.name + "</h3>")
//   // .bindPopup("<h2>Airport Code: " + data.faa + "</h2> <hr> <h3>Airport Name: " + data.name + "</h3>")

//   .addTo(map);
// });


// console.log(data.FeatureCollection.properties.name);
// console.log(data.type); //data not defined outside function


// bIND POP UP EXAMPLE FROM FOR EACH
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
// .addTo(map);
// });