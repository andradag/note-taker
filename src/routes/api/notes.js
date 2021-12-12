const { Router } = require("express");

const {
  getNotes,
  createNote,
  deleteNoteById,
} = require("../../controllers/api/notes");

const router = Router();

router.get("/", getNotes);
router.post("/", createNote);
router.delete("/:id", deleteNoteById);

module.exports = router;