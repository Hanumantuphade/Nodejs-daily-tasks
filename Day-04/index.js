const { log } = require("console");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to log request details
app.use((req, res, next) => {
  log("run frist middleware");
  next(); // Call the next middleware or route handler
});

app.use((req, res, next) => {
  log("run second middleware");
  next(); // Call the next middleware or route handler
});

app.get("/", (req, res) => {
  res.send("hello world");
  next();
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});
app.get("/contact", (req, res,next) => {
  return next(new Error("This is a contact page error"));
});
app.use((err,req,res,next)=>{
  console.error(err.stack); // Log the error stack trace
  res.status(500).send("Something went wrong!"); // Send a generic error response
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
