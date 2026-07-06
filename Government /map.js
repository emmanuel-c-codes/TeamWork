// reportList.forEach((report) => {

//     if (report.lat == null || report.lng == null) {
//         console.warn("Invalid report:", report);
//         return;
//     }

//  existing marker code

// });

// ===============================
// EcoMonitor Map Module
// ===============================
const locateButton = document.getElementById("locateMe");
const refreshButton = document.getElementById("refreshMap");
let map;
let markers;
let userLat = null;
let userLng = null;

function initMap() {
  // Create marker cluster
  markers = L.markerClusterGroup();

  // Create map
  map = L.map("map").setView([9.082, 8.6753], 6);

  // Street Layer
  const street = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution: "&copy; OpenStreetMap contributors",
    },
  );

  // Satellite Layer
  const satellite = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "&copy; Esri",
    },
  );

  // Default layer
  street.addTo(map);

  // Layer control
  L.control
    .layers({
      "Street Map": street,
      Satellite: satellite,
    })
    .addTo(map);

  // Load markers
  locateUser();

  // Enable report creation by clicking map
  enableMapClick();

  // Locate button
  setupLocateButton();

  // Refresh button
  setupRefreshButton();
}
// ===============================
// Get User Location
// ===============================

function locateUser() {
  if (!navigator.geolocation) {
    displayReports(reports);

    return;
  }

  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLat = position.coords.latitude;
      userLng = position.coords.longitude;

      map.setView([userLat, userLng], 13);

      L.marker([userLat, userLng])
        .addTo(map)
        .bindPopup("<b>📍 Your Current Location</b>")
        .openPopup();

      displayReports(reports);
    },
    (error) => {
      console.log("Error Code:", error.code);
      console.log("Error Message:", error.message);

      alert(error.message);

      displayReports(reports);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    },
  );
}
// ===============================
// Display Reports
// ===============================

function displayReports(reportList) {
  markers.clearLayers();

  reportList.forEach((report) => {
    let distance = "";

    if (userLat !== null && userLng !== null) {
      distance = calculateDistance(
        userLat,
        userLng,
        report.lat,
        report.lng,
      ).toFixed(1);
    }

    let color = "green";

    if (distance !== "") {
      if (distance <= 2) {
        color = "red";
      } else if (distance <= 5) {
        color = "orange";
      }
    }

    const icon = L.divIcon({
      html: `
                <div style="
                    width:18px;
                    height:18px;
                    border-radius:50%;
                    background:${color};
                    border:3px solid white;
                ">
                </div>
            `,

      className: "",
    });

    const marker = L.marker(
      [report.lat, report.lng],

      { icon },
    );

    marker.bindPopup(`
            <div class="space-y-2">

                <h3 class="font-bold text-lg">
                    ${report.type}
                </h3>

                <p>
                    📍 ${report.state}
                </p>

                <p>
                    Status:
                    <strong>${report.status}</strong>
                </p>

                ${distance ? `<p><strong>${distance} km away</strong></p>` : ""}

            </div>
        `);

    markers.addLayer(marker);
  });

  map.addLayer(markers);
}
// ===============================
// Locate Me Button
// ===============================
function setupLocateButton() {
    if (!locateButton) return;

    locateButton.addEventListener("click", () => {

        navigator.geolocation.getCurrentPosition(

            (position) => {

                userLat = position.coords.latitude;
                userLng = position.coords.longitude;

                map.flyTo([userLat, userLng], 15);

                displayReports(reports);

            },

            (error) => {

                console.log(error);
                alert(error.message);

            },

            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }

        );

    });
}
// button.addEventListener("click", () => {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       userLat = position.coords.latitude;
//       userLng = position.coords.longitude;

//       map.flyTo([userLat, userLng], 15);
//     },

    // (error) => {
    //   console.log(error.code);
    //   console.log(error.message);

    //   alert(error.message);
    // },

    // {
    //   enableHighAccuracy: true,
    //   timeout: 10000,
    //   maximumAge: 0,
    // },
// ===============================
// Refresh Map
// ===============================
function setupRefreshButton() {
    if (!refreshButton) return;

    refreshButton.addEventListener("click", () => {

        // Reset map to Nigeria's default view
        map.setView([9.0820, 8.6753], 6);

        // Remove all report markers
        markers.clearLayers();

        // Reload the report markers
        displayReports(reports);

    });
}
// ===============================
// Click Map
// ===============================

function enableMapClick() {
  map.on("click", function (e) {
    document.getElementById("reportForm").classList.remove("hidden");

    document.getElementById("latitude").value = e.latlng.lat.toFixed(6);

    document.getElementById("longitude").value = e.latlng.lng.toFixed(6);
  });
}
// (error) => {
//     console.log(error.code);
//     console.log(error.message);
// }
