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

const deadlines = [];
const descriptionsOfTasks = [];
const Notes = [];

//2. Event Listener added to submit button
 
$(".submit").click(function(event) {

    event.preventDefault();

    // Fetch values from the form fields
    const deadline = $("#deadline").val();
    const descriptionOfTasks = $("#description").val();
    const taskNotes = $("#notes").val();

    //Adds the user submissions to the arrays
    //.push method used to store the user input in the arrays.  Want to find away to populate this input in to the table on the to 
    //do list table page when it is stored in the arrays.
    deadlines.push(deadline);
    descriptionOfTasks.push(descriptionOfTasks);
    notes.push(taskNotes);

    $("#deadline").val = "";
    $("#description").val = "";
    $("#notes").val = "";

})