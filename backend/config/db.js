const mongoose = require("mongoose");

const connectedDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const myConn = await mongoose.connect(process.env.Mongo_Url);
    console.log(
      ` Mongo database connectd successfully,${myConn.connection.host}`,
    );
  } catch (error) {
    console.log("Error in cnnecting Mongo database", error);
  }
};

module.exports = connectedDB;
