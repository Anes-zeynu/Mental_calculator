const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();
const PORT = process.env.port || 5000;

const startServer = () => {
  mongoose.connect(process.env.Mongo_Url);
  app.listen(PORT, () => {
    console.log(`the server is listening in https://localhost:${PORT}`);
  });
};

startServer();
