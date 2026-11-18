const player = require("../model/player");
const bcrypt = require("bcryptjs");

const registerPlayer = async (req, res) => {
  try {
    const { name, email, password } = req.body;
  } catch (error) {
    console.log("Error in adding player", error.message);
  }
};
