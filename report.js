function openReport(report) {

    const reportModal = document.getElementById("reportModal");

    if (!reportModal) return;

    reportModal.classList.remove("hidden");
    reportModal.classList.add("flex");

    document.getElementById("modalId").textContent = report.id;
    document.getElementById("modalCategory").textContent = report.type;
    document.getElementById("modalLocation").textContent = report.state;
    document.getElementById("modalDescription").textContent = report.description;
    document.getElementById("modalStatus").value = report.status;
    document.getElementById("modalPriority").value = report.priority;
    document.getElementById("reportImage").src =
        report.image || "images/no-image.png";
}

const reportModal = document.getElementById("reportModal");
const closeReportModal = document.getElementById("closeReportModal");

if (closeReportModal && reportModal) {

    closeReportModal.addEventListener("click", () => {

        reportModal.classList.remove("flex");
        reportModal.classList.add("hidden");

    });

}