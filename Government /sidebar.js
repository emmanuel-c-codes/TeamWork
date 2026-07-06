// // ===============================
// // EcoMonitor Sidebar Module
// // ===============================

// function loadSidebar() {

//     const sidebar = document.getElementById("sidebar");

//     const toggleSidebar = document.getElementById("toggleSidebar");

//     if (!sidebar || !toggleSidebar) return;

//     toggleSidebar.addEventListener("click", () => {

//         sidebar.classList.toggle("collapsed");

//     });

// }
// const sidebar = document.getElementById("sidebar");
// const toggleBtn = document.getElementById("toggleSidebar");

// toggleBtn.addEventListener("click", () => {

//     sidebar.classList.toggle("w-72");
//     sidebar.classList.toggle("w-24");

//     document.querySelectorAll(".sidebar-text").forEach(text => {
//         text.classList.toggle("hidden");
//     });

//     document.querySelectorAll("#sidebar nav a").forEach(link => {
//         link.classList.toggle("justify-center");
//     });

// });
// ===============================
// EcoMonitor Sidebar Module
// ===============================

function loadSidebar() {

    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleSidebar");

    if (!sidebar || !toggleBtn) return;

    toggleBtn.addEventListener("click", () => {

        sidebar.classList.toggle("w-72");
        sidebar.classList.toggle("w-24");

        document.querySelectorAll(".sidebar-text").forEach(text => {
            text.classList.toggle("hidden");
        });

        document.querySelectorAll("#sidebar nav a").forEach(link => {
            link.classList.toggle("justify-center");
        });

    });

}