//base layer option "streets"
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  accessToken: API_KEY
});

//base layer option "satelliteStreets"
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
{
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/satellite-streets-v11',
  accessToken: API_KEY
});

let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets ,
 };

//map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]  //skill drill: streets
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

let torontoHoods = "https://raw.githubusercontent.com/DeliaDavila/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// edit the d3.json() method that includes theL.geoJSON()layer to plot the data.
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// });


//skill drill:
// Make the lines blue, with a weight of 1.
// Make the polygon fill color yellow.
// Add a popup to show each neighborhood.
// Make the default map layer Streets with Satellite Streets the second option.


// // Create a style for the polygon.
let myStyle = {
  color: "#4420e3", 
  weight: 1,
  fillColor: "#ffffa1"
}

//skill drill with style added:

d3.json(torontoHoods).then(function(data) {
  L.geoJson(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME +
    "</h3><hr><h3>Designation: " + feature.properties.AREA_S_CD + 
    "</h3>");
  }
})
.addTo(map);
});
