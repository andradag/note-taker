
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const { readFromFile, writeTOFile } = require("../../utils");

const getNotes = (req, res) => {
  const filePath = path.join(__dirname, "../../../db/db.json");
  const notes = readFromFile(filePath);
  res.json(notes);
};

const createNote = (req, res) => {
    const { title, text } = req.body;
    const id = uuidv4();
    const newNote = {
      title,
      text,
      id,
    };

    const filePath = path.join(__dirname, "../../../db/db.json");
    const notes = readFromFile(filePath);

    notes.push(newNote);

    writeToFile(filePath, notes);

    res.json({ success: true });

};
const deleteNoteById = (req, res) => {
    const { id } = req.params;

    const filePath = path.join(__dirname, "../../../db/db.json");
    const notes = readFromFile(filePath);
  
    const filteredNotes = notes.filter((note) => {
      return note.id !== id;
    });
  
    writeToFile(filePath, filteredNotes);
  
    res.json({ success: true });

};

module.exports = {
  getNotes,
  createNote,
  deleteNoteById,
};