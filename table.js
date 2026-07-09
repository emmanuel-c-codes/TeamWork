// ===============================
// EcoMonitor Table Module
// ===============================

const reportsTableBody = document.getElementById("reportsTableBody");

function renderReportTable(reportList) {

    reportsTableBody.innerHTML = "";

    reportList.forEach((report, index) => {

        let priority = "Medium";
        let priorityColor = "bg-yellow-100 text-yellow-700";

        if (report.status === "Critical") {

            priority = "High";
            priorityColor = "bg-red-100 text-red-600";

        } else if (report.status === "Pending") {

            priority = "Medium";
            priorityColor = "bg-yellow-100 text-yellow-700";

        } else {

            priority = "Low";
            priorityColor = "bg-green-100 text-green-700";

        }

        reportsTableBody.innerHTML += `

            <tr class="border-b hover:bg-gray-50">

                <td class="py-4">
                    ${(index + 1).toString().padStart(3, "0")}
                </td>

                <td>${report.type}</td>

                <td>${report.state}</td>

                <td>

                    <span class="${priorityColor} px-3 py-1 rounded-full">

                        ${priority}

                    </span>

                </td>

                <td>${report.status}</td>

            </tr>

        `;

    });

}