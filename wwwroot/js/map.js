

// Initialize and add the map
let map;

async function initMap() {
     // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
        "marker",
    ); 

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 41.8781, lng: -87.6298 }, //centered in chicago
        mapId: "1223296c9e0b184c", //adds style from style cloud
        disableDefaultUI: true,  //disables default buttons
    });

    var transitLayer = new google.maps.TransitLayer();

    transitLayer.setMap(map);
   

    /*
 
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    const markers = locations.map((position, i) => {
        const label = labels[i % labels.length];
        const pinGlyph = new google.maps.marker.PinElement({
            glyph: label,
            glyphColor: "White",
        });
        const marker = new google.maps.marker.AdvancedMarkerElement({
            position,
            content: pinGlyph.element,
        });

        // markers can only be keyboard focusable when they have click listeners
        // open info window when marker is clicked
        marker.addListener("click", () => {
            infoWindow.setContent(position.lat + ", " + position.lng);
            infoWindow.open(map, marker);
        });
        return marker;
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({ markers, map }); 
    */
}

initMap();