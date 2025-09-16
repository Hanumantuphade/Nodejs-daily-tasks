const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/miniProjectdatabase");

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  profilepic:{
    type:String,
    default:"default.jpeg"
  },
  age: Number,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
