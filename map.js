
// ===============================
// EcoMonitor Government Map Module
// ===============================

const refreshButton = document.getElementById("refreshMap");

let map;
let markers;

function initMap() {
    // Create marker cluster
    markers = L.markerClusterGroup();

    // Create map centered on Nigeria
    map = L.map("map").setView([9.0820, 8.6753], 6);

    // Street Layer
    const street = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors",
        }
    );

    // Satellite Layer
    const satellite = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
            attribution: "&copy; Esri",
        }
    );

    // Default layer
    street.addTo(map);

    // Layer control
    L.control.layers(
        {
            "Street Map": street,
            "Satellite": satellite,
        }
    ).addTo(map);

    // Display report markers
    displayReports(reports);

    // Refresh button
    setupRefreshButton();
}

// ===============================
// Display Reports
// ===============================

function displayReports(reportList) {
    markers.clearLayers();

    reportList.forEach((report) => {

        let color = "orange";

        switch (report.status) {
            case "Resolved":
                color = "green";
                break;

            case "In Progress":
                color = "blue";
                break;

            case "Critical":
                color = "red";
                break;

            case "Pending":
            default:
                color = "orange";
                break;
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
            { icon }
        );

        // marker.bindPopup(`
        //     <div class="space-y-2">

        //         <h3 class="font-bold text-lg">
        //             ${report.type}
        //         </h3>

        //         <p>
        //             📍 ${report.state}
        //         </p>

        //         <p>
        //             <strong>Status:</strong>
        //             ${report.status}
        //         </p>

        //         <p>
        //             <strong>Priority:</strong>
        //             ${report.priority}
        //         </p>

        //     </div>
        // `);
        marker.on("click", () => {

    openReport(report);

});

        markers.addLayer(marker);
    });

    map.addLayer(markers);
}

// ===============================
// Refresh Map
// ===============================
function setupRefreshButton() {
    if (!refreshButton) return;

    refreshButton.addEventListener("click", () => {
        map.setView([9.0820, 8.6753], 6);
        markers.clearLayers();
        displayReports(reports);
    });
}

// Initialize the map after the page has loaded
document.addEventListener("DOMContentLoaded", () => {
    initMap();
});
