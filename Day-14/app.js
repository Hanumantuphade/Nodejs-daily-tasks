const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const user = require("./models/user");

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "hamu",
    email: "hamu@123",
    age: "21",
  });

  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "hello i am learning data Association",
    user: "68a1734e8479a5c63cfe4ed2",
  });

  let user = await userModel.findOne({ _id: "68a1734e8479a5c63cfe4ed2" });
  user.posts.push(post._id);
  await user.save();

  res.send({ post, user });
});
app.listen(3000, () => {
  console.log(`server runing on localhost//:${3000}`);
});
