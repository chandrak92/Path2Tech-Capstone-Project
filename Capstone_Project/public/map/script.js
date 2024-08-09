const icons = {
  "Drop-off bin": "./assets/mapPin_F79872.png",
  "Farmer's Market Drop-off": "./assets/mapPin_3A7D44.png",
  "Non-Profit Organization Thrift Store": "./assets/mapPin_FFCF70.png"
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

    const preSignedURL = "https://textile-donation-locations.s3.us-east-1.amazonaws.com/donationLocations3.json?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLWVhc3QtMSJHMEUCIQDV6CsRjkeqTAzywPzxxatdfdhtspPTWYb3VqOSUPGZCwIgcwi4ahsDvOnTAAUOsIj5Swy7wQrh0ufaTTOrHW5NSiQq6AIINxAAGgw2Mjk3MTU2NDU4MTciDKh7osjylIwcZtn7uirFAuDphC5RC8NnJCVRY1UeRjIu4mBE3bXdF%2FcZvtjewj6E7woopz%2BseWEnx3FqStLsRxaQrWWtPg73JQoNhYu%2Bpcog3pTrSNeWiSNpWmUX1DpCaaLwhd2%2FxqvxPupm6KxyxQ9Ol9MBDXagAbw%2FSpX2njTYYVTdmjv138q8twX%2F8iy0WOiV8kW5GUxdWbi7O%2Fcy072Ov9R8QQEUcnY3S2yzUHTjlPU7A6iYl1UduNDO4TFZdtq7M54%2BbRTBAhmpe%2FfajUHQmntmsow9zxCLGtsWuuJDOBfcg4hkkAV92sLvMbcVsLXaqXWAh6wGY99AbQL1UIfRyULYC42ObfEND4iKN%2F6da3u7ikRWiE7hYQMZpijA%2BMCBfGevP%2F8onnlNY6%2FzUn6zXYt%2FAunTUarnMZ66WNU9OPmicOIEUrAOzthYJoqUBl7LInIw%2FoLVtQY6swIq%2BmN6%2B66Gh0Q8vFVaVliCYWl5TSyhmIqBanM6PwhO4Q6iKT6YfRNwdSAUeVO654m0hPEB5QTDVSuLV62z3VuoAHuf3E%2FgG%2Bm86p7hKiXE8lpiZJcHhkxHko0gViBwGzKSpINHKKoOjwIxS%2By6MWt5%2BOLugBdhnd9H%2F8haIuoxonQBlGPCKislLFtIslmk2z8cBjTb0hvDUbcN%2BYJWSKeuwLya%2BdGKaKF6eORdijRkWphfLHMthWzSPatJBA0BaLkFbVGqS6RcA%2BWWXh8l3%2Fv1usfS3AkGg4JZbWdU0%2F3hYp4Sjg%2Bd7vTE%2FSz3bE0l6lmk%2BVuk5cJu17xtOkVWEq4AFAG5MJrrXkm5EcLKeROZEZt054hY32oHIA3WeTXnjn5XZj5l3VZgWs19E4E7ZBEXHymd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240808T220748Z&X-Amz-SignedHeaders=host&X-Amz-Expires=14400&X-Amz-Credential=ASIAZFHP2GV4TA77CS63%2F20240808%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f02b615dc3a7ef6a76425130e396de8a87db781bfea3766fa034e0cf509d2bcb"
    
    fetch(preSignedURL)
      .then(response => response.json())
      .then(locations => {
        locations.forEach(location => {
          const lat = parseFloat(location.Latitude);
          const lng = parseFloat(location.Longitude);
          const position = { lat: lat, lng: lng };
          const icon = icons[location["Location Type"]] || 'defaultPin.png';

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
  const thriftCheckbox = document.getElementById('thrift-store').checked;

  markers.forEach(marker => {
    if ((marker.locationType === "Drop-off bin" && binCheckbox) ||
        (marker.locationType === "Farmer's Market Drop-off" && marketCheckbox) ||
        (marker.locationType === "Non-Profit Organization Thrift Store" && thriftCheckbox)) {
      marker.setMap(map);
    } else {
      marker.setMap(null);
      }
  });
}
// Event listeners for checkboxes
document.getElementById('bin').addEventListener('change', filterMarkers);
document.getElementById('farmers-market').addEventListener('change', filterMarkers);
document.getElementById('thrift-store').addEventListener('change', filterMarkers);
// attach event listeners to each checkbox (referred to by id)to detect when they are checked or unchecked
// when the checkboxes change state, 'filterMarkers' func called