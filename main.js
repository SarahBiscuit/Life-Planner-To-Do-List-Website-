import express from "express";
const app = express();
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
import pg from "pg";

//Create the database DONE    
//Create the database connection in this file
/*When i select the data field from the database for the table, I will need to use the following SQL code
SELECT TO_CHAR(your_date_column, 'DD/MM/YYYY') AS formatted_date FROM your_table;
This is because I want to format it as DD/MM/YYYY and this is not how SQL stores it in the database*/
//Amend my routes to handle the new database structure - in the main-js and index.ejs
//Looking at putting an API between the back-end and the database to handle the database requests.  Need to do some research on this.
//Consider adding an edit route to update items in the database (would, however, also involve adding an edit button in the UI)
//Will I still need uuid when I am using a database?
//DATABASE PLAN - four columns - id(serial primary key) (which is why I am thinkign I won't need uuid), deadline, description and notes.

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "toDoListWebsite",
  password: "INSERT MY PASSWORD HERE",
  port: 5432,
});
db.connect();

const newToDoListItem = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));  

//Renders the form//
app.get("/", (req, res) => {
    res.render("index.ejs", { deadline: "", description: "", notes: "" });
});

//handles form submissions//
app.post("/submit", (req, res) => {
    //Form data extracted//
    const {deadline, description, notes } = req.body;
    const id = uuidv4(); // Unique ID
    // Log data for debugging
    console.log("To do list item recieved:", { id, deadline, description, notes });

    // Add new to do list item to array
    // Assign an ID based on the array length
    newToDoListItem.push({ id, deadline, description, notes });

    // Redirect to toDoListTable page//
    res.redirect("/table");
});

app.get("/table", (req, res) => {
    res.render("toDoListTable.ejs", { toDoList: newToDoListItem });
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.post("/delete", (req, res) => {
    const { id } = req.body;
    const index = newToDoListItem.findIndex(item => item.id === id);
    if (index !== -1) newToDoListItem.splice(index, 1);
    res.redirect("/table");
});

app.listen(3000, () => {
console.log("Server running on port 3000.");
});

