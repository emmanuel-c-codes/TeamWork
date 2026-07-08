// ===============================
// EcoMonitor Report Module
// ===============================

// const incidentForm = document.getElementById("incidentForm");

// if (incidentForm) {

//     incidentForm.addEventListener("submit", submitReport);

// }

// // function submitReport(event) {

// //     event.preventDefault();

// //     console.log("Form submitted successfully!");

// // }

// function submitReport(event) {

//     event.preventDefault();

//     const latitude = parseFloat(
//         document.getElementById("latitude").value
//     );

//     const longitude = parseFloat(
//         document.getElementById("longitude").value
//     );

//     const type =
//         document.getElementById("incidentType").value;

//     const state =
//         document.getElementById("incidentState").value;

//     const description =
//         document.getElementById("description").value;

//     console.log({
//         latitude,
//         longitude,
//         type,
//         state,
//         description
//     });

// }


// function renderReportTable(reports) {
    
// }


// ===============================
// EcoMonitor Report Module
// ===============================

const incidentForm = document.getElementById("incidentForm");

if (incidentForm) {
    incidentForm.addEventListener("submit", submitReport);
}

// function submitReport(event) {
//     event.preventDefault();

//     const latitude = parseFloat(
//         document.getElementById("latitude").value
//     );

//     const longitude = parseFloat(
//         document.getElementById("longitude").value
//     );

//     const type = document.getElementById("incidentType").value;

//     const state = document.getElementById("incidentState").value;

//     const description = document.getElementById("description").value;

//     console.log({
//         latitude,
//         longitude,
//         type,
//         state,
//         description
//     });
// }

function submitReport(event) {

    event.preventDefault();

    const latitude = parseFloat(
        document.getElementById("latitude").value
    );

    const longitude = parseFloat(
        document.getElementById("longitude").value
    );

    const type =
        document.getElementById("incidentType").value;

    const state =
        document.getElementById("incidentState").value;

    const description =
        document.getElementById("description").value;

    // Validate the form
    if (!state) {

        alert("Please select a state.");

        return;

    }

    if (!description.trim()) {

        alert("Please enter a description.");

        return;

    }

    // Create the report object
    const newReport = {

        id: Date.now(),

        type,

        state,

        description,

        priority: "Medium",

        status: "Pending",

        lat: latitude,

        lng: longitude,

        date: new Date().toISOString().split("T")[0]

    };

    console.log(newReport);

}

function addReport(report) {
    reports.push(report);
    renderReportTable(reports);
    displayReports(reports);
}