// =====================================
// Dashboard Statistics Module
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    loadDashboardStats();

});

// =====================================
// Load Dashboard
// =====================================

function loadDashboardStats() {

    updateTotalReports();
    updatePendingReports();
    updateResolvedReports();
    updateCriticalReports();

}

// =====================================
// Total Reports
// =====================================

function updateTotalReports() {

    document.getElementById("totalReports").textContent =
        reports.length;

}

// =====================================
// Pending Reports
// =====================================

function updatePendingReports() {

    const pending = reports.filter(report =>
        report.status === "Pending"
    );

    document.getElementById("pendingReports").textContent =
        pending.length;

}

// =====================================
// Resolved Reports
// =====================================

function updateResolvedReports() {

    const resolved = reports.filter(report =>
        report.status === "Resolved"
    );

    document.getElementById("resolvedReports").textContent =
        resolved.length;

}

// =====================================
// Critical Reports
// =====================================

function updateCriticalReports() {

    const critical = reports.filter(report =>
        report.priority === "Critical"
    );

    document.getElementById("criticalReports").textContent =
        critical.length;

}

// =====================================
// Refresh Dashboard
// =====================================

function refreshDashboard() {

    loadDashboardStats();

}