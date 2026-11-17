const express = require("express");
const connectedDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();
const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use("/mentalgame", authRoutes);
const startServer = async () => {
  try {
    await connectedDB();
    app.listen(PORT, () => {
      console.log(`the server is listening in https://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("error in starting the server");
  }
};

startServer();
