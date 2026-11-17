const express = require("express");

const app = express();
const PORT = process.env.port || 5000;

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`the server is listening in https://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("error in starting the server");
  }
};

startServer();
