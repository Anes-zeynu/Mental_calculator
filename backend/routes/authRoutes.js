const express = require("express");
const { registerPlayer } = require("../controllers/controller");
const router = express.Router();
router.post("/register", registerPlayer);

router.post("/login", async (req, res) => {
  res.send("login");
});

module.exports = router;
