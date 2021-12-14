const { Router } = require("express");

const { renderNotesPage, renderHomePage } = require("../../controllers/view");

const router = Router();

router.get("/notes", renderNotesPage);
router.get("*", renderHomePage);

module.exports = router;