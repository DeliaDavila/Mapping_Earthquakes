// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object ....use this when you add multiple tile layers, or a background image of our map(s),
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });


// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11', //this is what you remove
//     tileSize: 512,              //I guess this is the map style reference?
//     zoomOffset: -1,                 //also this?
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


//weird instructions:
//Copy this part of the URL: https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/
    //literally? or find something like it on the Mapbox Glossary?
// In your tileLayer() code, replace this part of the URL, https://api.tiles.mapbox.com/v4/{id}/,   //um...that's not what it has
        //with the Mapbox Styles API URL you copied.                                                     
// Remove the .png from the URL.                                                                    //um...there is no .png
// Remove the id attribute and the map style reference.
// The code for the tileLayer() should look like the following:


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);