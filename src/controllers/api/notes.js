
const path = require("path");

const { readFromFile } = require("../../utils");

const getNotes = (req, res) => {
  const filePath = path.join(__dirname, "../../../db/db.json");
  const notes = readFromFile(filePath);
  res.json(notes);
};

const createNote = (req, res) => {};
const deleteNoteById = (req, res) => {};

module.exports = {
  getNotes,
  createNote,
  deleteNoteById,
};