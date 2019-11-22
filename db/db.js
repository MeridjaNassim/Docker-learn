const mongoose = require("mongoose");
const url = "mongodb://mongo-gdg:27017/dockerTuto";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(value => {
    console.log("====================================");
    console.log("Connected to database");
    console.log("====================================");
  })
  .catch(err => {
    console.error(err);
  });

exports.connection = mongoose.connection;
