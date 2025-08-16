const cookieParser = require("cookie-parser");
const expreess = require("express");
const app = expreess();
const path = require("path");
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(expreess.json());
app.use(expreess.urlencoded({ extended: true }));
app.use(expreess.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });
      let token = jwt.sign({ email }, "988171");
      res.cookie("token", token);
      res.send(createdUser);
    });
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) res.send("something went worng");

  bcrypt.compare(req.body.password, user.password, (err, result) => {
  if (err) {
    // actual error (e.g., bcrypt internal issue)
    return res.status(500).send("Something went wrong");
  }

  if (result) {
    // password matches
    return res.send("yes you can login");
  } else {
    // password does not match
    return res.status(401).send("password is incorrect");
  }
});
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
