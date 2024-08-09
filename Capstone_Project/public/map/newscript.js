// not sure if this was an attempt for React
// initialize and add the map
let map;

async function initMap() {
  // The location of NYC
  const position = { lat: 40.7128, lng: -74.0060 };
  // Request needed libraries.
  //@ts-ignore WDYM??
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

  // The map, value is assigned here
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,   //  centered at the "position" var value (NYC coordinates)
    mapId: "DONATIONS_MAP",    // why's this necessary?
  });

  // The markers
  fetch('donationbinlocations.json')   // retrieves JSON file containing locations data ALSO NEED TO RETRIEVE DATA FROM , 'farmersMarketsLocations.json' JSON
      .then(response => response.json())   // .then method is associated with Promises. allows you to specify what should happen after a Promise is fulfilled(resolved)/rejected
      .then(locations => {    // .then method always returns a new Promise, allows you to chain multiple .then calls together, here using the parsed data (from response.json)
        locations.forEach(location => {
          new google.maps.marker.PinElement({    // marker is placed on map at marker construction using map property in marker options
            position: {lat: location.Latitude, lng: location.Longitude},
            map: map,
            title: location.Name,
            gmpDraggable: false,
            gmpClickable: true
            // icon: "mapicon2.png"    // make smaller
          });
        }); //if (location["Location Type"] = "Drop-off bin")
      })
  // const marker = new AdvancedMarkerElement({
  //   map: map,
  //   position: position,
  //   title: "Uluru",
  // });
}

initMap();
// the Map and AdvancedMarkerElement libraries are loaded when the initMap() function is called