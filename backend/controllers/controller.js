const player = require("../model/player");
const bcrypt = require("bcryptjs");

const registerPlayer = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Invalid , all are required field" });
    }
    const existingPlayer = await player.findOne({
      email: email.toLowercase().trim(),
    });

    if (existingPlayer) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPlayer = await player.create({
      name: playerName.trim(),
      email: email.toLowercase().trim(),
      password: hashedPassword,
    });

    res.status(201).json({
      message: "player regisered successfully",
      player: {
        id: newPlayer._id,
        name: newPlayer.playerName,
        email: newPlayer.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in registration player",
      error: error.message,
    });
  }
};

module.exports = { registerPlayer };
