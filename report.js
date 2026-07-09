function openReport(report) {

    // Open modal
    document.getElementById("reportModal").classList.remove("hidden");
    document.getElementById("reportModal").classList.add("flex");

    // Fill report details
    document.getElementById("modalId").textContent = report.id;

    document.getElementById("modalCategory").textContent = report.type;

    document.getElementById("modalLocation").textContent = report.state;

    document.getElementById("modalDescription").textContent =
        report.description;

    document.getElementById("modalStatus").value =
        report.status;

    document.getElementById("modalPriority").value =
        report.priority;

    document.getElementById("reportImage").src =
        report.image || "images/no-image.png";
}
const reportModal = document.getElementById("reportModal");

document
.getElementById("closeReportModal")
.addEventListener("click", () => {

    reportModal.classList.remove("flex");

    reportModal.classList.add("hidden");

});