
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to log request details
app.use((req, res, next) => {
 console.log("run frist middleware");
  next(); // Call the next middleware or route handler
});

app.use((req, res, next) => {
  console.log("run second middleware");
  next(); // Call the next middleware or route handler
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
