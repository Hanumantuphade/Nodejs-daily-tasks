const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mydatabase")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

module.exports = mongoose.model("User", userSchema);
