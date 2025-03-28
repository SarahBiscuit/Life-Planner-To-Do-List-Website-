import express from "express";
const app = express();
import bodyParser from "body-parser";

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));  

app.get("/", (req, res) => {
    res.render("index.ejs",);
});


app.get("/table", (req, res) => {
    res.render("toDoListTable.ejs",)
});


app.listen(3000, () => {
console.log("Server running on port 3000.");
});


/* COMMENTED OUT AS THIS WILL BE ADDED TO MY EJS FILES.  ADDING THE EXPRESS AND EJS BACK END CODE ABOVE.

//Could look at adding back-end integration to handle the form submission (will learn how to do this on my course).
//Once I have done this, I will need to implement client-side storage (database) or my user entries will not show on the to do list table page.

    // Array to store the user data
const newToDoListItem = [];

// Function to add a new row and item to the table
function addRowAndItem(item) {
    const tableBody = $("#tableBodyToDoList");
    const tr = $("<tr></tr>");

    // Create new cells and add content based on user input
    $("<td></td>").text(item.deadline).appendTo(tr);
    $("<td></td>").text(item.descriptionOfTasks).appendTo(tr);
    $("<td></td>").text(item.taskNotes).appendTo(tr);

    // Create delete button
    const deleteButton = $("<button></button>")
        .text("Delete")
        .addClass("btn btn-danger")
        .attr("aria-label", "delete")
        .click(function () {
            $(this).closest("tr").remove(); // Removes the row containing the button
        });

    // Add delete button to a new cell and append to the row
    const deleteCell = $("<td></td>").append(deleteButton);
    tr.append(deleteCell);

    // Append the row to the table body
    tableBody.append(tr);
}

// Event Listener for the submit button
$("#submitButton").click(function (event) {
    event.preventDefault();

    // Fetch values from the form fields
    const deadline = $("#deadline").val();
    const descriptionOfTasks = $("#description").val();
    const taskNotes = $("#notes").val();

    if (deadline && descriptionOfTasks && taskNotes) {
        // Create an object and push it to the array
        const newItemObject = {
            deadline: deadline,
            descriptionOfTasks: descriptionOfTasks,
            taskNotes: taskNotes,
        };

        newToDoListItem.push(newItemObject);

        // Reset the form fields
        $("#deadline").val("");
        $("#description").val("");
        $("#notes").val("");

        // Add the new row to the table
        addRowAndItem(newItemObject);

        alert("Your Task Has Been Added to the Table on the 'To Do List Table' Page.");
    } else {
        alert("Please fill out all fields before submitting.");
    }
});*/
