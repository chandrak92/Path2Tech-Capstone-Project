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

    const preSignedURL = "https://textile-donation-locations.s3.us-east-1.amazonaws.com/donationLocations.json?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLWVhc3QtMSJHMEUCIQDMvcM%2FBn7Gxah27pJkp6mq7l2weOXYGK%2BPr6Jk88R2pAIgfJ9D2tu0k3aUZOPqx2GuMi45blr%2FI%2Fk0n952odIwTNMq8QII9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mjk3MTU2NDU4MTciDGILpQRxHgwMFBKO0CrFAjzHknLXPP0e%2FjXpCHwN0jg9mpRNIt2kKPyxywUMf4dCn4ap2vicD3gwWw2BmLYoRNtQBTvQYsk5tcbhxDDLXxY3kYICanam7tpVRNveCFH76OVCY8NtI6Tdebpca%2BJ6s1LjEbpMab9UCdKdDWTrj0HHpkPDRqRzLd8%2Fnhy1mdUmpRPE8Ca5hD5oTsg0P%2B9FezYHW1AZwOdLZVRi6Nsmv3ViIAypxDfdfl4lUWsGjvu1ZowRpza%2FYe9obu8%2BGR3nCiX8RQJQ9xwzaw%2BmFZlod9KxqutsNAR%2FOOLTxPy%2FFTtYEpYrfv%2B4nTiWkrPfGeET04OjeaVqKlYDhH2YiiH5xfCuMeneDZdX4jB2t3YEMxWYnZwgfn6VjRixSJQt5338CqXQvEVWLmu2t3DPg%2F3NJAM%2F9rB7zc0pBTmRX2%2FhqBW2B7PV3TUwq%2BfJtQY6swJ78D1cfHG7khvV1BwMN5t9DUGsJCISsgap5L2mUAQWz8iLqCGLdO9BA8l87mWtnD5H4BxUE10qFmJWNjKDu3Pax2K7RO1aYs5AtSeiI%2Fc2l9jhco%2Bi3VEiQDEtRABwRw%2FCzh1PNMaqA1ts1CxQ6YsWKwSuPuh4zXzCXnjNrfB8rVb0fjnBVt%2F9ZHStzZtCGiMZGdUecXaKARburr%2FSvLlJqTvtza4IM3IQ7N9Cf0mjcDc92FN4LDwpbjYmXsK%2Bwm%2Bm%2BbJzdxL8y71DzstE93L6zmIxgyE%2FmIrOxiI5Qi%2Bphwpjj0QCPEGONPAOmulRchAVRItKo%2BTHEleEfmqLg16yS1ow1o%2F8oq8dCQoE%2BJiIB2hy1n9dzEwMvca08najje%2FyietHJwnzHpvqw%2FFICYSo5YUQ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240807T022652Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Credential=ASIAZFHP2GV4XBVEYY4O%2F20240807%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b7449978fed9e2c97607ba7e5814051f48021d1b488fbeaaf04b1cb479e89064"
    
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