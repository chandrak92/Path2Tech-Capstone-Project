const icons = {
  "Drop-off bin": "./assets/mapicon2.png",  // custom marker made on canva. MAKE SMALLER
  "Farmer's Market Drop-off": "./assets/defaultPin.png"
};

let map;
let markers = [];

/* function that initializes map (function typically named initMap?) */
function initMap() {
    const myLatLng = { lat: 40.7128, lng: -74.0060 }    // NY centered coordinates
    map = new google.maps.Map(document.getElementById('map'), {   // creates a map inside <div> w/ 'map' id
      center: myLatLng, // center map at a default location (myLatLng var coordinates)  
      zoom: 10   // property sets the intial zoom level
    });     // zoo;m levels: 1: world, 5: Landmass/Continent, 10: City, 15: Street, 20: Buildings
    // how can I set default (center) location based on user's general location ??
    // possibly using geolocation API, implement later ****

    // const locations = [   // coordinates and names of drop off locations, hard coded sample
    //   {lat: 40.730610, lng: -73.935242, name: 'Drop-off Location 1'},   // objects in this array
    //   {lat: 40.712776, lng: -74.005974, name: 'Drop-off Location 2'},
    //   {lat: 40.758896, lng: -73.985130, name: 'Drop-off Location 3'},
    // ];

    const preSignedURL = "PRE-SIGNED URL HERE"
    // should I use "fetch" to retrieve data from a file w/in my local files?
    // update: JSON file hosted in the cloud to offset client server.
    fetch(preSignedURL)   // keep in mind this pre-signed URL expires. for dev purposes only. I will set S3 to public when ready
    // retrieves JSON file containing locations data ALSO NEED TO RETRIEVE DATA FROM 'farmersMarketsLocations.json' JSON
      .then(response => response.json())   // .then method is associated with Promises. allows you to specify what should happen after a Promise is fulfilled(resolved)/rejected
      .then(locations => {    // .then method always returns a new Promise, allows you to chain multiple .then calls together, here using the parsed data (from response.json)
        locations.forEach(location => {   // .forEach method called on 'locations' array, anonymous function w/ a parameter called location is passed to .forEach
          const lat = parseFloat(location.Latitude);    // do i need to parse into float?? data is already a number ??
          const lng = parseFloat(location.Longitude);
          const position = { lat: lat, lng: lng };
          const icon = icons[location["Location Type"]] || 'mapicon.png';

          // Debugging logs
          // console.log('Location Type:', location["Location Type"]);
          // console.log('Icon:', icon);

          function infoContent(location) {
            const content =
              `<div id="info-content">
                  <h2>${location.Name}</h2><br>
                  <strong>Location Type:</strong> ${location["Location Type"]}<br>
                  <strong>Items Accepted:</strong> ${location["Items Accepted"]}<br>
                  <strong>Location:</strong> ${location.Location}<br>
                  <strong>Borough:</strong> ${location.Borough}<br>
                  <strong>Phone Number:</strong> ${location["Phone Number"]}<br>
                  <strong>Website:</strong> ${location.Website}
              </div>`;
            return content;
          }

          const infowindow = new google.maps.InfoWindow();

          const marker = new google.maps.Marker({     // creates a new instance of a marker using Google Maps API. marker is placd on map at marker construction using map property in marker options
            position: position, // 'Marker' constructor takes object w various properties to define marker's behavior & appearance.
            map: map,   // specify the map on which the marker will be displayed (references map instance created earlier in code)
            title: location.Name,
            draggable: false,
            clickable: true,
            icon: icon,
            animation: google.maps.Animation.DROP,
            locationType: location["Location Type"]   // not a built-in property of G Maps Marker object
          });   // this is a custom property I'm adding to each marker to store location type.

          marker.addListener("click", () => {
            const content = infoContent(location);
            infowindow.setContent(content);
            infowindow.open(map, marker);
          });

          markers.push(marker);   // adds newly created "marker" object to "markers" array
         }); // if (location["Location Type"] = "Drop-off bin")
      });
      
      /* .then method takes up to 2 callback functions as arguments:
      1st callback: func executes when Promise resolved. It receives the resolved value of the Promise as an arguement.
      2nd callback(optional): func executes when Promise rejected. It receives the reason for rejection (Error object) as an arguement 
      
      The Response object represents the response to a request, here to the fetch request.
      The 'fetch' function returns a Promise that resolves to a Response object.
      
      The response.json() method reads the body of the response and parses it as JSON, returning another Promise that resolves to the parsed JSON object
      */
/* fetch(`geolocatorapi?location=$
{location.Location}`).then((response) =>
 {latitude:response.latitude, longitude:response.longitude}).catch(err => console.error(err)); */
    //  .catch(error => console.error('Error fetching data:', error));

  // fetch('farmersMarketsLocations.json')    // code I want to implement if I seperate JSON data into two seperate files.
  //   .then(response => response.json())
  //   .then(locations => {
  //     locations.forEach(location => {
  //       const position = {lat: location.Latitude, lng: location.Longitude};
  //       new google.maps.Marker({
  //         position: position,
  //         map: map,
  //         title: location.Name,
  //         icon: icons.Market // const icons = { Bin: 'mapicon.png', Market: 'mapicon2.png'}
  //       });
  //     });
  //   })
  //   .catch(error => console.error('Error fetching data:', error));

  /* for each location object in the 'location' array, a pointer is created & added to map.
    For each iteration, the current element (an object from the locations array) is passed to the function and assigned to the location parameter.
    Using 'location' within the function (allows to access the properties lat, lng, name) of each location obj in the loop:
    location.lat accesses the lat property of the current object.
    location.lng accesses the lng property of the current object.
    location.name accesses the name property of the current object. */
    
    // .forEach does not mutate original array. 

    /* unlike .map method, forEach does not return a new array, it operates on the original array (to use .map, you would declare a var = to method application)
    both take a function to be passed on each iteration of the array. */

  // NOTE: google.maps.Marker has been deprecated as of Feb 2024, I'll have to use google.maps.marker.AdvancedMarkerElement instead.

  //   /* NOTE: As of February 21st, 2024 (v3.56), google.maps.Marker is deprecated.
  //   We encourage you to transition to the new google.maps.marker.AdvancedMarkerElement class.
  //   Advanced markers provide substantial improvements over the legacy google.maps.Marker class.
  //   The minimum version of the Maps JavaScript API with google.maps.marker.AdvancedMarkerElement
  //   is 3.53.2. At this time, google.maps.Marker is not scheduled to be discontinued.
  //   more info at https://developers.google.com/maps/documentation/javascript/markers#:~:text=Marker%20constructor%20takes%20a%20single,initial%20location%20of%20the%20marker.
  //   */
}

// Function to filter markers based on checkbox state
function filterMarkers() {
  const binCheckbox = document.getElementById('bin').checked;
  const marketCheckbox = document.getElementById('farmers-market').checked;

  markers.forEach(marker => {
    if ((marker.locationType === "Drop-off bin" && binCheckbox) ||
        (marker.locationType === "Farmer's Market Drop-off" && marketCheckbox)) {
      marker.setMap(map);
    } else {
      marker.setMap(null);
      }
  });
}   /* func iterates over all markers, checks their 'locationType' property
      */

// Event listeners for checkboxes
document.getElementById('bin').addEventListener('change', filterMarkers);
document.getElementById('farmers-market').addEventListener('change', filterMarkers);
// attach event listeners to each checkbox (referred to by id)to detect when they are checked or unchecked
// when the checkboxes change state, 'filterMarkers' func called