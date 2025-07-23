import db from '../db.js';

// Function to add a new to-do item
export async function addItem({ deadline, description, notes }) {
  const query = `INSERT INTO items (deadline, description, notes) VALUES ($1, $2, $3)`;
  await db.query(query, [deadline, description, notes]);
}

// Function to get all items
export async function getItems() {
  const query = `
    SELECT id, TO_CHAR(deadline, 'DD/MM/YYYY') AS formatted_deadline, description, notes
    FROM items
    ORDER BY id ASC
  `;
  const result = await db.query(query);
  return result.rows.map(row => ({
    id: row.id,
    deadline: row.formatted_deadline,
    description: row.description,
    notes: row.notes,
  }));
}

// Function to delete an item by id
export async function deleteItem(id) {
  const query = `DELETE FROM items WHERE id = $1`;
  await db.query(query, [id]);
}