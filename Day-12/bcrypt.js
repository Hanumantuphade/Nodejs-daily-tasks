const expreess = require("express");
const app = expreess();
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
  const password = "mySecret123";

  // Hash password
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err;
    console.log("Hashed Password:", hash);
  });
});

app.get("/verify", (req, res) => {
  const userInput = "mySecret123";
  const storedHash =
    "$2b$10$HVNsS8pMiVgBAJZfcdeEXeYDtoGOWhQxWCncFIG8YYr8XIz6xK.pC";
  bcrypt.compare(userInput, storedHash, (err, result) => {
    if (result) console.log("Password match");
    else console.log("Password does not match");
    
    res.send(`Password match: ${result}`);
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
