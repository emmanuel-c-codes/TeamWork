let editingOfficerId = null;
function loadOfficers(){

const container=document.getElementById("officerContainer");

container.innerHTML="";

officers.forEach(officer=>{

container.innerHTML+=`

<div class="bg-white rounded-2xl shadow-lg p-6">

...

</div>

`;

});

}
function searchOfficer(keyword){

return officers.filter(officer=>

officer.name.toLowerCase().includes(keyword.toLowerCase())

);

}
document.addEventListener("DOMContentLoaded", () => {

    renderOfficers(officers);

    updateOfficerStats();

    document
        .getElementById("officerSearch")
        .addEventListener("keyup", searchOfficer);

});
function renderOfficers(data){

    const container=document.getElementById("officerContainer");

    container.innerHTML="";

    data.forEach(officer=>{

        const performance=Math.round(
            (officer.completed/officer.assigned)*100
        );

        container.innerHTML+=`

<div class="bg-white rounded-2xl shadow-lg p-6">

<div class="flex items-center gap-4">

<div>

<h3 class="font-bold text-xl">
${officer.name}
</h3>

<p class="text-gray-500">
${officer.department}
</p>

</div>

</div>

<div class="mt-6 space-y-2">

<p>📍 ${officer.state}</p>

<p>📧 ${officer.email}</p>

<p>📞 ${officer.phone}</p>

<p>Status :
<span class="${
officer.status==="Active"
?
'text-green-600'
:
'text-yellow-500'
}">
${officer.status}
</span>
</p>

<p>Assigned : ${officer.assigned}</p>

<p>Completed : ${officer.completed}</p>

</div>

<div class="mt-6">

<div class="flex justify-between mb-2">

<span>Performance</span>

<span>${performance}%</span>

</div>

<div class="w-full h-3 bg-gray-200 rounded-full">

<div
class="h-3 bg-green-600 rounded-full"
style="width:${performance}%">

</div>

</div>

</div>

<div class="mt-6 flex gap-2">

<button
onclick="viewOfficer(${officer.id})"
class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">

View 

</button>

<button
onclick="editOfficer(${officer.id})"
class="flex-1 bg-yellow-500 text-white py-2 rounded-lg">

Edit

</button>

<button
onclick="deleteOfficer(${officer.id})"
class="flex-1 bg-red-600 text-white py-2 rounded-lg">

Delete

</button>

</div>

</div>

`;

    });

}
function updateOfficerStats(){

document.getElementById("totalOfficers").textContent=
officers.length;

document.getElementById("activeOfficers").textContent=
officers.filter(o=>o.status==="Active").length;

document.getElementById("leaveOfficers").textContent=
officers.filter(o=>o.status==="On Leave").length;

document.getElementById("assignedCases").textContent=
officers.reduce((sum,o)=>sum+o.assigned,0);

}
function searchOfficer(e){

const keyword=e.target.value.toLowerCase();

const filtered=officers.filter(officer=>

officer.name.toLowerCase().includes(keyword) ||

officer.state.toLowerCase().includes(keyword) ||

officer.department.toLowerCase().includes(keyword)

);

renderOfficers(filtered);

}
const modal = document.getElementById("officerModal");

document
.getElementById("addOfficerBtn")
.addEventListener("click", ()=>{

    editingOfficerId = null;

    officerForm.reset();

    document.getElementById("officerModalTitle").textContent =
        "Add Environmental Officer";

    document.getElementById("saveOfficerBtn").textContent =
        "Save Officer";

    officerModal.classList.remove("hidden");
    officerModal.classList.add("flex");

});

document
    .getElementById("closeOfficerModal")
    .addEventListener("click", () => {

        modal.classList.remove("flex");
        modal.classList.add("hidden");

    });

function viewOfficer(id){

    const officer = officers.find(o => o.id === id);

    if(!officer) return;

    const performance = Math.round(
        (officer.completed / officer.assigned) * 100
    ) || 0;

    document.getElementById("officerProfile").innerHTML = `

<div class="grid lg:grid-cols-3 gap-8">

    <!-- Left Side -->

    <div class="text-center">

        <img
            src="${officer.image}"
            class="w-44 h-44 rounded-full object-cover mx-auto border-4 border-green-600 shadow-lg">

        <h2 class="text-3xl font-bold mt-5">

            ${officer.name}

        </h2>

        <p class="text-gray-500">

            ${officer.department}

        </p>

        <span
        class="inline-block mt-4 px-4 py-2 rounded-full
        ${officer.status==="Active"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"}">

            ${officer.status}

        </span>

    </div>

    <!-- Right Side -->

    <div class="lg:col-span-2 space-y-6">

        <div class="grid md:grid-cols-2 gap-6">

            <div>

                <p class="text-gray-500">State</p>

                <h4 class="font-semibold text-lg">

                    ${officer.state}

                </h4>

            </div>

            <div>

                <p class="text-gray-500">Email</p>

                <h4 class="font-semibold text-lg">

                    ${officer.email}

                </h4>

            </div>

            <div>

                <p class="text-gray-500">Phone</p>

                <h4 class="font-semibold text-lg">

                    ${officer.phone}

                </h4>

            </div>

            <div>

                <p class="text-gray-500">Department</p>

                <h4 class="font-semibold text-lg">

                    ${officer.department}

                </h4>

            </div>

        </div>

        <hr>

        <div class="grid grid-cols-3 gap-6 text-center">

            <div>

                <h3 class="text-4xl font-bold text-blue-600">

                    ${officer.assigned}

                </h3>

                <p class="text-gray-500">

                    Assigned Cases

                </p>

            </div>

            <div>

                <h3 class="text-4xl font-bold text-green-600">

                    ${officer.completed}

                </h3>

                <p class="text-gray-500">

                    Completed

                </p>

            </div>

            <div>

                <h3 class="text-4xl font-bold text-purple-600">

                    ${performance}%

                </h3>

                <p class="text-gray-500">

                    Performance

                </p>

            </div>

        </div>

        <div>

            <div class="flex justify-between mb-2">

                <span>Performance</span>

                <span>${performance}%</span>

            </div>

            <div class="w-full h-4 bg-gray-200 rounded-full">

                <div
                    class="bg-green-600 h-4 rounded-full"
                    style="width:${performance}%">

                </div>

            </div>

        </div>

    </div>

</div>

`;
        }
document
.getElementById("officerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const imageInput =
        document.getElementById("officerImage");

    let image = "images/default-officer.png";

    if(imageInput.files.length > 0){

        image = URL.createObjectURL(imageInput.files[0]);

    }

    if(editingOfficerId){

        const officer = officers.find(
            o => o.id === editingOfficerId
        );

        officer.name =
            officerName.value;

        officer.department =
            officerDepartment.value;

        officer.state =
            officerState.value;

        officer.email =
            officerEmail.value;

        officer.phone =
            officerPhone.value;

        officer.status =
            officerStatus.value;

        if(imageInput.files.length > 0){

            officer.image = image;

        }

        editingOfficerId = null;

    }else{

        officers.push({

            id: Date.now(),

            name: officerName.value,

            department: officerDepartment.value,

            state: officerState.value,

            email: officerEmail.value,

            phone: officerPhone.value,

            status: officerStatus.value,

            assigned:0,

            completed:0,

            image:image

        });

    }

    renderOfficers(officers);

    updateOfficerStats();

    this.reset();

    document.getElementById("officerModalTitle").textContent =
        "Add Environmental Officer";

    document.getElementById("saveOfficerBtn").textContent =
        "Save Officer";

    officerModal.classList.add("hidden");
    officerModal.classList.remove("flex");

});

document
.getElementById("closeViewOfficer")
.addEventListener("click", () => {

    document
        .getElementById("viewOfficerModal")
        .classList.add("hidden");

    document
        .getElementById("viewOfficerModal")
        .classList.remove("flex");

});
function editOfficer(id){

    const officer = officers.find(o => o.id === id);

    if(!officer) return;

    editingOfficerId = id;

    document.getElementById("officerModalTitle").textContent =
        "Edit Officer";

    document.getElementById("saveOfficerBtn").textContent =
        "Update Officer";

    document.getElementById("officerName").value =
        officer.name;

    document.getElementById("officerDepartment").value =
        officer.department;

    document.getElementById("officerState").value =
        officer.state;

    document.getElementById("officerEmail").value =
        officer.email;

    document.getElementById("officerPhone").value =
        officer.phone;

    document.getElementById("officerStatus").value =
        officer.status;

    officerModal.classList.remove("hidden");
    officerModal.classList.add("flex");

}