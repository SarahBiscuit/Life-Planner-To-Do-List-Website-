/*PLAN FOR GETTING TO DO LIST JAVASCRIPT TO WORK (check against online examples but these are my ideas)

1. Create an array to store the user's input answers for each question.
2. Set an eventListener so that each time the submit button is clicked the user input is added to the arrays using .push().  Is this something to 
create an object for, so that each to do list entry becomes it's own object?  I think that that is the logical thing to do.
3. If there is no content that the user has added, set it so that .push(); will not Work.
4. Set up .push so that the array elements are used to populate a table on a new page of my website.
5. Need to find a method to remove any to do list item of the user's choosing from the table if needed (delete button on the relevant row?).  
So can't use .pop() as that will just remove the last input added to the arrays.
6. When the user has added and submitted content in the form, need to set the form so that the input clears once the form is submitted
(so that the user can add another to do list item).
*/

//Want to us jQuery to write my JavaScript

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

   //Chatgpt advice on Dynamic Table Population:

//When navigating to the "To Do List Table" page, retrieve the tasks from the 
// tasks array or localStorage and dynamically populate a table.
//Use a method like newToDoListItem.forEach() to iterate through the array and create rows for the table.
//https://www.w3schools.com/jsref/jsref_foreach.asp
newToDoListItem.forEach(addRowAndItem);

function addRowAndItem()) {

    let tr = table.insertRow();

    //creates new row and adds content based on the user input.

    tr.insertCell().textContent = newToDoListItem._deadline;
    tr.insertCell().textContent = newToDoListItem._descriptionOfTasks;
    tr.insertCell().textContent = newToDoListItem._taskNotes;

    //Working on adding a delete button
    const deleteItem = tr.deleteCell();
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger submit";
    $("deleteButton").attr("aria-label", "delete");
    deleteItem.appendChild(deleteButton);

    // Event Listener to delete the row
    deleteButton.addEventListener("click", () => {
        table.deleteRow(tr.rowIndex); // Removes the row from the table
    });

}