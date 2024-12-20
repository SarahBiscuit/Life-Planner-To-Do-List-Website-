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

//1.

const deadlines = [];
const descriptionsOfTasks = [];