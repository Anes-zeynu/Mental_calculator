const express = require("express");
const connectedDB = require("./config/db");

const app = express();
const PORT = process.env.port || 5000;

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
