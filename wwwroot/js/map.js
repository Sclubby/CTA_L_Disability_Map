// Initialize and add the map
let map;

let markers = [];

async function initMap() {
    // Request needed libraries.
    const { Map, InfoWindow, TransferLayer } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, pinElement } = await google.maps.importLibrary("marker");

     map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 41.8781, lng: -87.6298 }, //centered in chicago
        mapId: "1223296c9e0b184c", //adds style from style cloud
        disableDefaultUI: true,  //disables default buttons
        maxZoom: 16,
        minZoom: 10
    });

    //add element in top left corner to choose what lines are displayed on the map
    const lineControl = document.getElementById("line-selector-control");
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(lineControl);
    const lineSelected = document.getElementById("line-selector");

    lineSelected.addEventListener("change", () => {
        while (markers.length > 0) {
            const x = markers.pop();
            x.setMap(null);
        }
        addMarkers(lineSelected.value);
    });

    //broken (should add transit but doesn't work with map style on)
    //  const transitLayer = new google.maps.TransitLayer();

    // transitLayer.setMap(map);


    addMarkers("All");

}

//adds markers to a map, include is used to filter based off option selected
function addMarkers(include) {
    for (let i = 0; i < names.length; i++) {
        //purple express lines should just be concidered purple
        if (colors[i] == "Purple-Express") {
            colors[i] = "Purple";   
        }

        //depending on what line(s) the user selected only place those markers
        if (include == "All" || include == colors[i]) {
            //Depending on stop color and if it's Accessible give correct png file
            const markerPNG = document.createElement("img");
            markerPNG.width = 28; markerPNG.height = 22;
            markerPNG.src = determinePNG(colors[i], ADAs[i]);

            //create marker
            const marker = new google.maps.marker.AdvancedMarkerElement({
                map,
                position: { lat: lats[i], lng: lons[i] },
                content: markerPNG
            });

            markers.push(marker);

            //pop up window that is displayed when Icon is pressed
            const infowindow = new google.maps.InfoWindow({
                content: names[i],
            });

            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
        }
    }
}

function determinePNG(color, isADA) {
    switch (color) {
        case "Blue":
            if (isADA) { return '/Images/Blue_Station_Dis.png' }
            return '/Images/Blue_Station.png'
        case "Red":
            if (isADA) { return '/Images/Red_Station_Dis.png' }
            return '/Images/Red_Station.png'
        case "Green":
            if (isADA) { return '/Images/Green_Station_Dis.png' }
            return '/Images/Green_Station.png'
        case "Purple":
            if (isADA) { return '/Images/Purple_Station_Dis.png' }
            return '/Images/Purple_Station.png'
        case "Pink":
            if (isADA) { return '/Images/Pink_Station_Dis.png' }
            return '/Images/Pink_Station.png'
        case "Yellow":
            if (isADA) { return '/Images/Yellow_Station_Dis.png' }
            return '/Images/Yellow_Station.png'
        case "Orange":
            if (isADA) { return '/Images/Orange_Station_Dis.png' }
            return '/Images/Orange_Station.png'
        case "Brown":
            if (isADA) { return '/Images/Brown_Station_Dis.png' }
            return '/Images/Brown_Station.png'
        default:
            return ''
    }
}

initMap();