const player = require("../model/player");
const bcrypt = require("bcryptjs");

const registerPlayer = async (req, res) => {
  try {
    const { playerName, email, password } = req.body;
    if (!playerName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Invalid , all are required field" });
    }
    const existingPlayer = await player.findOne({
      email: email.toLowerCase().trim(),
    });

    if (existingPlayer) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPlayer = await player.create({
      playerName,
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    res.status(201).json({
      message: "player regisered successfully",
      player: {
        id: newPlayer._id,
        playerName: newPlayer.playerName,
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

const loginPlayer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    res.status(500).json({
      message: "failed to login",
      error: error.message,
    });
  }
};
module.exports = { registerPlayer, loginPlayer };
