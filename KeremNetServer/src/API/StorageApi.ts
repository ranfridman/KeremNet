import express from "express";
import { InMemoryStorage } from "../Storage/mamas-storage";
import { apiSetup } from "./ApiSetup";
const storage = new InMemoryStorage();
apiSetup(storage);
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("welcome to KeremNet API");
});

app.post("/users/create/", (req, res) => {
  const newUser = storage.create("users", {
    userName: req.query.userName,
    userProfileImage: req.query.userProfileImage,
    posts: [],
    createAt: new Date(),
  });
  res.status(201).json(newUser);
});

//Get all users id
app.get("/users/", (req: any, res: any) => {
  const newTest = storage.where("users", { });
  if (newTest.length === 0) {
    return res.status(404).json({ message: "User was not found" });
  } else {
    return res.status(200).json(newTest.map((item: any) => item.id));
  }
});

//Get all users posts
app.get("/users/:userId/posts/", (req: any, res: any) => {
  const users = storage.where("users", { id: req.params.userId });
  console.log(req.params.userId);
  
  if (users.length === 0) {
    return res.status(404).json({ message: "User was not found" });
  } else {
    return res.status(200).json(users[0].posts);
  }
});

//Get all posts
app.get("/post/:postId/", (req: any, res: any) => {
  const newTest = storage.where("posts", { id: req.params.postId });
  if (newTest.length === 0) {
    return res.status(404).json({ message: "Post was not found" });
  } else {
    return res.status(200).json(newTest[0]);
  }
});
app.put("/post/:postId/", (req: any, res: any) => {
  console.log(req.query.updated);
  
  const newTest = storage.where("posts", { id: req.params.postId });
  if (newTest.length === 0) {
    return res.status(404).json({ message: "Post was not found" });
  } else {
    console.log( Object.keys(JSON.parse(req.query.updated)));
    newTest[0] = Object.assign(newTest[0], JSON.parse(req.query.updated));
    return res.status(200).json(newTest[0]);
  }
})


app.post("/post/create/", (req, res) => {
  const newPost = storage.create("posts", {
    userName: req.query.userName,
    content: req.query.content,
    date: req.query.date,
    likes: 0,
    comments: []
  });
  const user = storage.find("users", (item: any) => item.id == newPost.id);
  if (user.length > 0) {
    user[0].posts.push(newPost.id);
  }
  res.status(201).json(newPost);
});    

// app.delete("/api/users/:userId/tests", (req, res) => {
//   const deletedTest = storage.remove("Tests", (item) => item.id == req.params.userId);
//   console.log("HIIIIIIIIIII", deletedTest);
//     return res.status(204).json(deletedTest);
// });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
