const mongoose = require("mongoose");

const connectedDB = async () => {
  const conect = await mongoose.connect(process.env.Mongo_Url);
};
