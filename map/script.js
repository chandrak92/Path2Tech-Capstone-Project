const icons = {
  "Drop-off bin": "./assets/mapicon2.png",
  "Farmer's Market Drop-off": "./assets/defaultPin.png"
};

let map;
let markers = [];

/* function that initializes map (function typically named initMap?) */
function initMap() {
    const myLatLng = { lat: 40.7128, lng: -74.0060 }
    map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 10
    });

    const preSignedURL = "PRE-SIGNED URL HERE"
    
    fetch(preSignedURL)
      .then(response => response.json())
      .then(locations => {
        locations.forEach(location => {
          const lat = parseFloat(location.Latitude);
          const lng = parseFloat(location.Longitude);
          const position = { lat: lat, lng: lng };
          const icon = icons[location["Location Type"]] || 'mapicon.png';

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

          const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: location.Name,
            draggable: false,
            clickable: true,
            icon: icon,
            animation: google.maps.Animation.DROP,
            locationType: location["Location Type"]
          });

          marker.addListener("click", () => {
            const content = infoContent(location);
            infowindow.setContent(content);
            infowindow.open(map, marker);
          });

          markers.push(marker);
         });
        });
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
}
// Event listeners for checkboxes
document.getElementById('bin').addEventListener('change', filterMarkers);
document.getElementById('farmers-market').addEventListener('change', filterMarkers);
// attach event listeners to each checkbox (referred to by id)to detect when they are checked or unchecked
// when the checkboxes change state, 'filterMarkers' func called