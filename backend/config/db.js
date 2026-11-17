const mongoose = require("mongoose");

const connectedDB = async () => {
  try {
    const conect = await mongoose.connect(process.env.Mongo_Url);
  } catch (error) {
    console.log("Error in cnnecting database", error);
  }
};
