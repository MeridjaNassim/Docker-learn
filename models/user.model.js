const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true
    },
    username: String,
    email: String,
    bio: String
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

exports.User = User;
