//Could look at adding back-end integration to handle the form submission (will learn how to do this on my course).
//Once I have done this, I will need to implement client-side storage (database) or my user entries will not show on the to do list table page.

//1. arrays to store the user data (using IIFE - Immediately Invoked Function Expression)

const newToDoListItem = [];

$(function () {
    const newToDoListItem = [];

    // Your code here
});

//Function to add new row and item to table.

function addRowAndItem(item) {

    const tableBody = $("#tableBodyToDoList");

    const tr = $("<tr></tr>");

    //creates new row and cells and adds content based on the user input.

    // Create new cells and add content based on user input
    $("<td></td>").text(item.deadline).appendTo(tr);
    $("<td></td>").text(item.descriptionOfTasks).appendTo(tr);
    $("<td></td>").text(item.taskNotes).appendTo(tr);

    //Working on adding a delete button
    const deleteButton = $("<button></button>")
    .text("Delete")
    .addClass("btn btn-danger")
    .attr("aria-label", "delete");

    //Add new cell and put delete button in it.
    
    const deleteCell = $("<td></td>").append(deleteButton);
    tr.append(deleteCell);

    // Event Listener to delete the row

    $(document).on("click", ".btn-danger", function () {
        $(this).closest("tr").remove(); // Removes the row containing the button
    });

//2. Event Listener added to submit button
 
$("#submitButton").click(function(event) {

    event.preventDefault();

    // Fetch values from the form fields
    const deadline = $("#deadline").val();
    const descriptionOfTasks = $("#description").val();
    const taskNotes = $("#notes").val();

    //Creates object to add the user input to the newToDoListItem array.
    //.push method used to store the user input in the array.  
    
    const newItemObject = {
        deadline: deadline,
        descriptionOfTasks: descriptionOfTasks,
        taskNotes: taskNotes,
    };

    newToDoListItem.push(newItemObject);

    $("#deadline").val("");
    $("#description").val("");
    $("#notes").val("");

    addRowAndItem(newItemObject);

    alert("Your Task Has Been Added to the Table on the 'To Do List Table' Page.");

}