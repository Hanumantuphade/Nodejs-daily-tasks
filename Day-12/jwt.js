const cookieParser = require("cookie-parser");
const e = require("express");
const expreess = require("express");
const app = expreess();
const jwt = require("jsonwebtoken");

app.use(cookieParser());

app.get("/", (req, res) => {
  const token = jwt.sign({ email: "hamu@gmail.com" }, "9881718316");
  res.cookie("token", token);
  res.send("JWT token set in cookie");
  // console.log("JWT Token:", token);
});

app.get("/verify", (req, res) => {
  jwt.verify(req.cookies.token,"9881718316",(err,decoded)=>{
    if (err) {
      console.error("JWT verification failed:", err);
      res.status(401).send("Invalid token");
    } else {
      console.log("Decoded JWT:", decoded);
      res.send(`JWT verified successfully: ${JSON.stringify(decoded)}`);
    }
  })
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});