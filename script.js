const ButtonSubmit = document.getElementById("btn");

const Error = document.getElementById("error");
const AddedEmployees = document.getElementById("AddedEmployees");

// Add event listener to the button
ButtonSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the values inside the event listener to capture updated values each time
    const Name = document.getElementById("name").value.trim();
    const Profession = document.getElementById("profession").value.trim();
    const Age = document.getElementById("age").value.trim();

    if (!Name || !Profession || !Age) {
        // Show error message if any field is empty
        Error.textContent = "Error: Please make sure all the fields are filled before adding an employee!";
        Error.style.color = "red"; // Add some visual feedback
    } else {
        // Show success message
        Error.textContent = "Success: Employee Added!";
        Error.style.color = "green";

        // Create a container for all employees if it doesn't already exist
        let AllEmployees = document.getElementById("AllEmployees");

        if (!AllEmployees) {
            AllEmployees = document.createElement("div");
            AllEmployees.id = "AllEmployees";
            AddedEmployees.appendChild(AllEmployees);
        }

        // Get the current number of employees (used to calculate the index)
        const employeeCount = AllEmployees.children.length + 1;

        // Create an employee box
        const EmployeeBox = document.createElement("div");
        EmployeeBox.className = "employeeAddorDelete";

        // Create the index tag
        const IndexTag = document.createElement("p");
        IndexTag.textContent = `${employeeCount}.`;
        IndexTag.style.fontWeight = "bold";

        // Create a container for employee details
        const NewEmployee = document.createElement("div");
        NewEmployee.className = "Employees";

        // Create and append name, profession, and age elements
        const NameTag = document.createElement("p");
        NameTag.textContent = `Name: ${Name}`;

        const EmployeeProfession = document.createElement("p");
        EmployeeProfession.textContent = `Profession: ${Profession}`;

        const EmployeeAge = document.createElement("p");
        EmployeeAge.textContent = `Age: ${Age}`;

        // Append index, name, profession, and age
        NewEmployee.appendChild(IndexTag); // Add the index tag as the first element
        NewEmployee.appendChild(NameTag);
        NewEmployee.appendChild(EmployeeProfession);
        NewEmployee.appendChild(EmployeeAge);

        // Create the delete button
        const Delete = document.createElement("button");
        Delete.className = "delete";
        Delete.textContent = "Delete User";

        // Append the employee details and delete button to the employee box
        EmployeeBox.appendChild(NewEmployee);
        EmployeeBox.appendChild(Delete);

        // Append the employee box to the list of all employees
        AllEmployees.appendChild(EmployeeBox);

        // Clear the input fields after adding the employee
        document.getElementById("name").value = "";
        document.getElementById("profession").value = "";
        document.getElementById("age").value = "";

        // Add functionality to the delete button
        Delete.addEventListener('click', () => {
            AllEmployees.removeChild(EmployeeBox);

            // Check if AllEmployees is empty and remove it if there are no employees left
            if (!AllEmployees.hasChildNodes()) {
                AddedEmployees.removeChild(AllEmployees);
            }
        });
    }
});
