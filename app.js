//This is the main entry point for the application
import express from "express";
import bodyParser from "body-parser";

import { addItem, getItems, deleteItem } from './api/items.js';

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Render blank to-do list form
app.get('/', (req, res) => {
  res.render('index.ejs', {
    deadline: '',
    description: '',
    notes: '',
  });
});

// Handle form submission and add item via API
app.post('/submit', async (req, res) => {
  try {
    const { deadline, description, notes } = req.body;
    console.log('Received new item:', { deadline, description, notes });

    await addItem({ deadline, description, notes }); // Use API function
    res.redirect('/table');
  } catch (err) {
    console.error('Error inserting item:', err);
    res.status(500).send('Server error');
  }
});

// Display table with items from API
app.get('/table', async (req, res) => {
  try {
    const items = await getItems();  // Use API function
    res.render('toDoListTable.ejs', { items });
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).send('Server error');
  }
});

// Render contact page
app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});

// Delete item via API
app.post('/delete', async (req, res) => {
  try {
    const id = req.body.id;
    await deleteItem(id);  // Use API function
    res.redirect('/table');
  } catch (err) {
    console.error('Error deleting item:', err);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});