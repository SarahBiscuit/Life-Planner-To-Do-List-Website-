import express from "express";
const app = express();
import bodyParser from "body-parser";
import pg from 'pg';

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
db.connect();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));  

//Renders the blank to do list form.//
app.get("/", (req, res) => {
  res.render("index.ejs", {
    deadline: "",
    description: "",
    notes: "",
  });
});

//handles form submissions.  Want to rewrite this route so that it takes the form submissions and pushes them to the database//
app.post("/submit", async (req, res) => {
    //Form data extracted//
    try {
    const {deadline, description, notes } = req.body;

    // Log data for debugging
    console.log("To do list item recieved:", { deadline, description, notes });

    // Add new to do list item to array
    await db.query("INSERT INTO items (deadline, description, notes) VALUES ($1, $2, $3)", [deadline, description, notes]);
    res.redirect("/table");
    } catch (err) {
        console.error("Error inserting item:", err.stack);
        res.status(500).send("Server error");
    }
});

app.get("/table", async (req, res) => {
   try {
  //Query the database for items 
  const result = await db.query("SELECT id, TO_CHAR(deadline, 'DD/MM/YYYY') AS formatted_deadline, description, notes FROM items ORDER BY id ASC;");
    const items = result.rows.map(row => ({
      id: row.id,
      deadline: row.formatted_deadline,
      description: row.description,
      notes: row.notes
    }));

    //Renders the webpage with the to do list items
    res.render("toDoListTable.ejs", {
      items: items,
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.post("/delete", async (req, res) => {
    const id = req.body.id;
    try {
        await db.query("DELETE FROM items WHERE id = $1", [id]);
        res.redirect("/table");
    } catch (err) {
        console.error("Error deleting item:", err.stack);
        res.status(500).send("Server error");
    }
});

app.listen(3000, () => {
console.log("Server running on port 3000.");
});

