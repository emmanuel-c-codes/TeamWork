// // // ===============================
// // // EcoMonitor Charts Module
// // // ===============================

// // function loadCharts() {

// //     loadMonthlyChart();
// //     loadCategoryChart();
// //     loadStateChart();

// // }

// // // ===============================
// // // Monthly Reports
// // // ===============================

// // function loadMonthlyChart() {

// //     const ctx = document.getElementById("monthlyChart");

// //     if (!ctx) return;

// //     new Chart(ctx, {

// //         type: "line",

// //         data: {

// //             labels: [
// //                 "Jan",
// //                 "Feb",
// //                 "Mar",
// //                 "Apr",
// //                 "May",
// //                 "Jun"
// //             ],

// //             datasets: [

// //                 {

// //                     label: "Reports",

// //                     data: [
// //                         25,
// //                         42,
// //                         51,
// //                         67,
// //                         74,
// //                         90
// //                     ],

// //                     borderWidth: 3,

// //                     tension: 0.4,

// //                     fill: true

// //                 }

// //             ]

// //         },

// //         options: {

// //             responsive: true,

// //             plugins: {

// //                 legend: {

// //                     display: true

// //                 }

// //             }

// //         }

// //     });

// // }

// // // ===============================
// // // Categories
// // // ===============================

// // function loadCategoryChart() {

// //     const ctx = document.getElementById("categoryChart");

// //     if (!ctx) return;

// //     new Chart(ctx, {

// //         type: "doughnut",

// //         data: {

// //             labels: [

// //                 "Illegal Dumping",

// //                 "Flood",

// //                 "Air Pollution",

// //                 "Oil Spill",

// //                 "Blocked Drainage"

// //             ],

// //             datasets: [

// //                 {

// //                     data: [

// //                         40,

// //                         22,

// //                         15,

// //                         12,

// //                         11

// //                     ]

// //                 }

// //             ]

// //         },

// //         options: {

// //             responsive: true

// //         }

// //     });

// // }

// // // ===============================
// // // Reports by State
// // // ===============================

// // function loadStateChart() {

// //     const ctx = document.getElementById("stateChart");

// //     if (!ctx) return;

// //     new Chart(ctx, {

// //         type: "bar",

// //         data: {

// //             labels: [

// //                 "Lagos",

// //                 "Abuja",

// //                 "Rivers",

// //                 "Delta",

// //                 "Enugu"

// //             ],

// //             datasets: [

// //                 {

// //                     label: "Reports",

// //                     data: [

// //                         80,

// //                         55,

// //                         63,

// //                         41,

// //                         38

// //                     ]

// //                 }

// //             ]

// //         },

// //         options: {

// //             responsive: true,

// //             plugins: {

// //                 legend: {

// //                     display: false

// //                 }

// //             }

// //         }

// //     });

// // }

// // =============================
// // EcoMonitor Analytics Charts
// // =============================

// document.addEventListener("DOMContentLoaded", () => {

//     // Global chart settings
//     Chart.defaults.font.family = "Arial";
//     Chart.defaults.color = "#6B7280";

//     =============================
//     Monthly Reports Chart
//     =============================

//     const monthlyCtx = document
//         .getElementById("monthlyChart")
//         .getContext("2d");

//     new Chart(monthlyCtx, {
//         type: "bar",

//         data: {
//             labels: [
//                 "Jan",
//                 "Feb",
//                 "Mar",
//                 "Apr",
//                 "May",
//                 "Jun",
//                 "Jul",
//                 "Aug",
//                 "Sep",
//                 "Oct",
//                 "Nov",
//                 "Dec"
//             ],

//             datasets: [{
//                 label: "Reports",

//                 data: [
//                     45,
//                     62,
//                     75,
//                     54,
//                     89,
//                     120,
//                     98,
//                     110,
//                     93,
//                     105,
//                     87,
//                     70
//                 ],

//                 backgroundColor: "#16a34a",
//                 borderRadius: 8
//             }]
//         },

//         options: {

//             responsive: true,

//             plugins: {
//                 legend: {
//                     display: false
//                 }
//             },

//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }

//         }

//     });
// //     function monthlyData() {

// //     const months = new Array(12).fill(0);

// //     reports.forEach(report => {

// //         const month = new Date(report.date).getMonth();

// //         months[month]++;

// //     });

// //     return months;

// // }
// // data:{

// // labels:[
// // "Jan","Feb","Mar","Apr","May","Jun",
// // "Jul","Aug","Sep","Oct","Nov","Dec"
// // ],

// // datasets:[{

// // label:"Reports",

// // data:monthlyData(),

// // backgroundColor:"#16a34a",

// // borderRadius:8

// // }]

// // }

//     =============================
//     Incident Categories
//     =============================

//     const categoryCtx = document
//         .getElementById("categoryChart")
//         .getContext("2d");

//     new Chart(categoryCtx, {

//         type: "doughnut",

//         data: {

//             labels: [
//                 "Flood",
//                 "Illegal Dumping",
//                 "Oil Spill",
//                 "Air Pollution",
//                 "Blocked Drainage"
//             ],

//             datasets: [{

//                 data: [
//                     32,
//                     24,
//                     18,
//                     14,
//                     12
//                 ],

//                 backgroundColor: [
//                     "#3B82F6",
//                     "#22C55E",
//                     "#F97316",
//                     "#EF4444",
//                     "#EAB308"
//                 ]

//             }]

//         },

//         options: {

//             responsive: true,

//             plugins: {

//                 legend: {
//                     position: "bottom"
//                 }

//             }

//         }

//     });
// //     function categoryData(){

// // const categories={};

// // reports.forEach(report=>{

// // categories[report.type]=(categories[report.type]||0)+1;

// // });

// // return{

// // labels:Object.keys(categories),

// // values:Object.values(categories)

// // };

// // }
// // const categories = categoryData();

// // data:{

// // labels:categories.labels,

// // datasets:[{

// // data:categories.values,

// // backgroundColor:[
// // "#16a34a",
// // "#3b82f6",
// // "#f59e0b",
// // "#ef4444",
// // "#8b5cf6",
// // "#14b8a6"
// // ]

// // }]

// // }

//     =============================
//     Reports by State
//     =============================

//     const stateCtx = document
//         .getElementById("stateChart")
//         .getContext("2d");

//     new Chart(stateCtx, {

//         type: "line",

//         data: {

//             labels: [
//                 "Lagos",
//                 "Abuja",
//                 "Rivers",
//                 "Kano",
//                 "Kaduna",
//                 "Oyo",
//                 "Enugu",
//                 "Delta"
//             ],

//             datasets: [{

//                 label: "Reports",

//                 data: [
//                     210,
//                     180,
//                     140,
//                     115,
//                     96,
//                     124,
//                     88,
//                     72
//                 ],

//                 borderColor: "#16a34a",

//                 backgroundColor: "rgba(22,163,74,.15)",

//                 fill: true,

//                 tension: 0.4,

//                 pointBackgroundColor: "#16a34a",

//                 pointRadius: 5

//             }]

//         },

//         options: {

//             responsive: true,

//             plugins: {

//                 legend: {
//                     display: false
//                 }

//             },

//             scales: {

//                 y: {
//                     beginAtZero: true
//                 }

//             }

//         }

//     });

// });
// // function stateData(){

// // const states={};

// // reports.forEach(report=>{

// // states[report.state]=(states[report.state]||0)+1;

// // });

// // return{

// // labels:Object.keys(states),

// // values:Object.values(states)

// // };

// // }
// // const states=stateData();

// // data:{

// // labels:states.labels,

// // datasets:[{

// // label:"Reports",

// // data:states.values,

// // borderColor:"#16a34a",

// // backgroundColor:"rgba(22,163,74,.15)",

// // fill:true,

// // tension:.4

// // }]

// // }
// // reports.push(newReport);
// // loadCharts();

// =======================================
// EcoMonitor Analytics Module
// chart.js
// =======================================

// Chart instances
let monthlyChart;
let categoryChart;
let stateChart;

// =======================================
// Load All Charts
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    Chart.defaults.font.family = "Arial";
    Chart.defaults.color = "#6B7280";

    loadCharts();

});

// =======================================
// Load All Charts
// =======================================

function loadCharts() {

    loadMonthlyChart();
    loadCategoryChart();
    loadStateChart();

}

// =======================================
// Monthly Data
// =======================================

function monthlyData() {

    const months = new Array(12).fill(0);

    reports.forEach(report => {

        const month = new Date(report.date).getMonth();

        months[month]++;

    });

    return months;

}

// =======================================
// Category Data
// =======================================

function categoryData() {

    const categories = {};

    reports.forEach(report => {

        categories[report.type] =
            (categories[report.type] || 0) + 1;

    });

    return {

        labels: Object.keys(categories),
        values: Object.values(categories)

    };

}

// =======================================
// State Data
// =======================================

function stateData() {

    const states = {};

    reports.forEach(report => {

        states[report.state] =
            (states[report.state] || 0) + 1;

    });

    return {

        labels: Object.keys(states),
        values: Object.values(states)

    };

}

// =======================================
// Monthly Chart
// =======================================

function loadMonthlyChart() {

    const canvas = document.getElementById("monthlyChart");

    if (!canvas) return;

    if (monthlyChart) {

        monthlyChart.destroy();

    }

    monthlyChart = new Chart(canvas, {

        type: "bar",

        data: {

            labels: [
                "Jan","Feb","Mar","Apr","May","Jun",
                "Jul","Aug","Sep","Oct","Nov","Dec"
            ],

            datasets: [{

                label: "Reports",

                data: monthlyData(),

                backgroundColor: "#16a34a",

                borderRadius: 8

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    ticks: {

                        precision: 0

                    }

                }

            }

        }

    });

}

// =======================================
// Category Chart
// =======================================

function loadCategoryChart() {

    const canvas = document.getElementById("categoryChart");

    if (!canvas) return;

    if (categoryChart) {

        categoryChart.destroy();

    }

    const categories = categoryData();

    categoryChart = new Chart(canvas, {

        type: "doughnut",

        data: {

            labels: categories.labels,

            datasets: [{

                data: categories.values,

                backgroundColor: [

                    "#16a34a",
                    "#3b82f6",
                    "#f59e0b",
                    "#ef4444",
                    "#8b5cf6",
                    "#06b6d4",
                    "#14b8a6"

                ]

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}

// =======================================
// State Chart
// =======================================

function loadStateChart() {

    const canvas = document.getElementById("stateChart");

    if (!canvas) return;

    if (stateChart) {

        stateChart.destroy();

    }

    const states = stateData();

    stateChart = new Chart(canvas, {

        type: "line",

        data: {

            labels: states.labels,

            datasets: [{

                label: "Reports",

                data: states.values,

                borderColor: "#16a34a",

                backgroundColor: "rgba(22,163,74,0.15)",

                fill: true,

                tension: 0.4,

                pointRadius: 5,

                pointBackgroundColor: "#16a34a"

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    ticks: {

                        precision: 0

                    }

                }

            }

        }

    });

}

// =======================================
// Refresh Charts
// Call this after adding a new report
// =======================================

function refreshCharts() {

    loadCharts();

}