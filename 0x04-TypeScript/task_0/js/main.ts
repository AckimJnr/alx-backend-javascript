interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student0 : Student = {
    firstName: "Ackim",
    lastName: "Longwe",
    age: 24,
    location: "zomba"
}

const student1 : Student = {
    firstName: "Jonathan",
    lastName: "Nolan",
    age: 50,
    location: "New York"
}

const studentList: Student[]=[student0, student1];

document.addEventListener("DOMContentLoaded", ()=>{
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";

    const headerRow = document.createElement("tr");
    const firstNameHeader = document.createElement("th");
    const locationHeader = document.createElement("th");

    firstNameHeader.textContent = "First Name";
    locationHeader.textContent = "Location";

    firstNameHeader.style.border = "1px solid #dddddd";
    locationHeader.style.border = "1px solid #dddddd";
    firstNameHeader.style.padding = "8px";
    locationHeader.style.padding = "8px";

    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    table.appendChild(headerRow);

    studentList.forEach(student=> {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        const locationCell = document.createElement("td");

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        firstNameCell.style.border = "1px solid #dddddd";
        locationCell.style.border = "1px solid #dddddd";
        firstNameCell.style.padding = "8px";
        locationCell.style.padding = "8px";


        row.appendChild(firstNameCell);
        row.appendChild(locationCell);

        table.appendChild(row);
    });
    document.body.appendChild(table);
});
