const express = require("express");
const app = express();
const userModule = require("./usermodule");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/create", async (req, res) => {
  const createdUser = await userModule.create({
    name: "Hamu",
    email: "hamu@gmail.com",
    age: 21,
  });
  res.send(createdUser);
});
app.get("/read", async (req, res) => {
  const users = await userModule.findOne({name: "Hamu"});
  res.send(users);
});

app.get("/update", async(req,res)=>{
  const updatedUser= await userModule.findOneAndUpdate({name:"Hamu"}, {name: "Hanumant pradip uphade"}, {new: true});
  res.send(updatedUser);
})

app.get ("/delete", async(req,res)=>{
  const deletedUser= await userModule.findOneAndDelete({name:"Hamu"});
  res.send(deletedUser);
})
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
