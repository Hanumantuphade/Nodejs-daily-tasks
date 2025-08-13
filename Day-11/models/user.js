const mongooese = require("mongoose");

mongooese
  .connect("mongodb://localhost:27017/userDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const userSchema = mongooese.Schema({
  name: "string",
  email: "string",
  image: "string",
});

module.exports = mongooese.model("User", userSchema);
