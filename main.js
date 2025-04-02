import express from "express";
const app = express();
import bodyParser from "body-parser";

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
    // Log data for debugging
    console.log("To do list item recieved:", { deadline, description, notes });

    // Add new to do list item to array
    // Assign an ID based on the array length
    newToDoListItem.push({ id: newToDoListItem.length, deadline, description, notes });

    // Redirect to toDoListTable page//
    res.redirect("/table");
});

app.get("/table", (req, res) => {
    res.render("toDoListTable.ejs", { toDoList: newToDoListItem });
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs",);
});

app.post("/delete", (req, res) => {
    const { index } = req.body;
    newToDoListItem.splice(index, 1);
    res.redirect("/table");
});

app.listen(3000, () => {
console.log("Server running on port 3000.");
});

