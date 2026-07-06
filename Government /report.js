// const reports = [

// {
//     type: "Illegal Dumping",
//     state: "Lagos",
//     status: "Pending",
//     priority: "Critical",
//     date: "2026-01-10",
//     lat: 6.5244,
//     lng: 3.3792
// },

// {
//     type: "Flood",
//     state: "Abuja",
//     status: "Investigating",
//     priority: "Medium",
//     date: "2026-02-15",
//     lat: 9.0765,
//     lng: 7.3986
// },

// {
//     type: "Air Pollution",
//     state: "Rivers",
//     status: "Critical",
//     priority: "Low",
//     date: "2026-02-22",
//     lat: 4.8156,
//     lng: 7.0498
// }

// ];
// refreshDashboard();
// refreshCharts();
// // loadReportsTable();
// // refreshMap();
function renderReportTable(reports) {
    
}

function addReport(report) {
    reports.push(report);
    renderReportTable(reports);
    displayReports(reports);
}