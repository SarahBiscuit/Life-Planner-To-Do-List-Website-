//Could look at adding back-end integration to handle the form submission (will learn how to do this on my course).

//1. arrays to store the user data

const newToDoListItem = [];

//2. Event Listener added to submit button
 
$(".submit").click(function(event) {

    event.preventDefault();

    // Fetch values from the form fields
    const deadline = $("#deadline").val();
    const descriptionOfTasks = $("#description").val();
    const taskNotes = $("#notes").val();

    //Creates object to add the user input to the newToDoListItem array.
    //.push method used to store the user input in the array.  Want to find away to populate this input in to the table on the to 
    //do list table page when it is stored in the arrays.
    
    const newItemObject = {
        deadline: deadline,
        descriptionOfTasks: descriptionOfTasks,
        taskNotes: taskNotes,
    };

    newToDoListItem.push(newItemObject);

    $("#deadline").val = "";
    $("#description").val = "";
    $("#notes").val = "");

    alert("Your Task Has Been Added to the Table on the 'To Do List Table' Page.");

//Add new row and item to table.
addRowAndItem(newItemObject);

function addRowAndItem(item) {

    const table = document.querySelector("tbody");

    let tr = table.insertRow();

    //creates new row and adds content based on the user input.

    tr.insertCell().textContent = item.deadline;
    tr.insertCell().textContent = item.descriptionOfTasks;
    tr.insertCell().textContent = item.taskNotes;

    //Working on adding a delete button
    const deleteItem = tr.insertCell();
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger submit";
    $("deleteButton").setAttribute("aria-label", "delete");
    deleteItem.appendChild(deleteButton);

    // Event Listener to delete the row
    deleteButton.addEventListener("click", () => {
        table.deleteRow(tr.rowIndex - 1); // Removes the row from the table
    });

}