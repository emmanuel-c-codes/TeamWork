// ===============================
// EcoMonitor Filters Module
// ===============================

const stateFilter = document.getElementById("stateFilter");
const typeFilter = document.getElementById("typeFilter");
const statusFilter = document.getElementById("statusFilter");
const searchBox = document.getElementById("searchBox");

function loadFilters() {

    populateStateFilter();

    populateTypeFilter();

    populateStatusFilter();

    setupFilterEvents();

}
function populateStateFilter() {

    stateFilter.innerHTML = '<option value="All States">All States</option>';

    const states = [...new Set(reports.map(report => report.state))];

    states.sort();

    states.forEach(state => {

        const option = document.createElement("option");

        option.value = state;

        option.textContent = state;

        stateFilter.appendChild(option);

    });

}
function populateTypeFilter() {

    typeFilter.innerHTML = '<option value="All Categories">All Categories</option>';

    const categories = [...new Set(reports.map(report => report.type))];

    categories.sort();

    categories.forEach(category => {

        const option = document.createElement("option");

        option.value = category;

        option.textContent = category;

        typeFilter.appendChild(option);

    });

}
function populateStatusFilter() {

    statusFilter.innerHTML = '<option value="All Status">All Status</option>';

    const statuses = [...new Set(reports.map(report => report.status))];

    statuses.sort();

    statuses.forEach(status => {

        const option = document.createElement("option");

        option.value = status;

        option.textContent = status;

        statusFilter.appendChild(option);

    });

}
function setupFilterEvents() {

    stateFilter.addEventListener("change", applyFilters);

    typeFilter.addEventListener("change", applyFilters);

    statusFilter.addEventListener("change", applyFilters);

    searchBox.addEventListener("keyup", applyFilters);

}
function applyFilters() {

    const selectedState = stateFilter.value;

    const selectedType = typeFilter.value;

    const selectedStatus = statusFilter.value;

    const searchText = searchBox.value.toLowerCase();

    const filteredReports = reports.filter(report => {

        const stateMatch =

            selectedState === "All States" ||

            report.state === selectedState;

        const typeMatch =

            selectedType === "All Categories" ||

            report.type === selectedType;

        const statusMatch =

            selectedStatus === "All Status" ||

            report.status === selectedStatus;

        const searchMatch =

            report.state.toLowerCase().includes(searchText) ||

            report.type.toLowerCase().includes(searchText);

        return (

            stateMatch &&

            typeMatch &&

            statusMatch &&

            searchMatch

        );

    });

    
currentReports = filteredReports;

renderReportTable(currentReports);
displayReports(currentReports);

// We'll connect these after they accept currentReports
// refreshDashboard(currentReports);
// refreshCharts(currentReports);
}