const { Router } = require("express");

const {
  getNote,
  createNote,
  deleteNoteById,
} = require("../../controllers/api/notes");

const router = Router();

router.get("/", getNote);
router.post("/", createNote);
router.delete("/:id", deleteNoteById);

module.exports = router;