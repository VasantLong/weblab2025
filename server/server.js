/*
|--------------------------------------------------------------------------
| server.js -- The core of your server
|--------------------------------------------------------------------------
|
| This file defines how your server starts up. Think of it as the main() of your server.
| At a high level, this file does the following things:
| - Connect to the database (TODO: WORKSHOP 5)
| - Sets up server middleware (i.e. addons that enable things like json parsing) (TODO: WORKSHOP 3)
| - Hooks up all the backend routes specified in api.js (TODO: WORKSHOP 4)
| - Sets up error handling in case something goes wrong when handling a request (TODO: WORKSHOP 3)
| - Actually starts the webserver
*/
require("dotenv").config();

// import libraries needed for the webserver to work!
const express = require("express"); // backend framework for our node server.
const path = require("path"); // provide utilities for working with file and directory paths

// import our api router
const api = require("./api.js");
// create a new express server
const app = express();

// allow us to make post requests
app.use(express.json());

// connect the api router to our server
app.use("/api", api);

// TODO (step1): implement GET /api/stories endpoint
const story1 = {
  _id: "id1",
  creator_name: "Stanley Zhao",
  content: "Hi everyone",
};
const story2 = {
  _id: "id2",
  creator_name: "Abby Chou",
  content: "Web.lab rocks",
};
const story3 = {
  _id: "id3",
  creator_name: "Andy Jiang",
  content: "I like cats",
};
const stories = [story1, story2, story3];

app.get("/api/stories", (req, res) => {
  res.send(stories);
});

// TODO (step2): implement POST /api/story endpoint

app.post("/api/story", (req, res) => {
  const newStory = req.body;
  stories.push(newStory);
  res.send(newStory);
});

// TODO (step3): implement GET /api/comments endpoint

const comment1 = {
  _id: "commentid1",
  creator_name: "Daniel Hong",
  parent: "id1",
  content: "Hi Stanley",
};
const comment2 = {
  _id: "commentid2",
  creator_name: "Lucas Bautista",
  parent: "id2",
  content: "I agree!",
};
const comment3 = {
  _id: "commentid3",
  creator_name: "Stanley Zhao",
  parent: "id1",
  content: "Hi Daniel",
};
const comments = [comment1, comment2, comment3];

app.get("/api/comments", (req, res) => {
  res.send(comments.filter((comment) => comment.parent === req.query.parent));
});

// TODO (step4): implement POST /api/comment endpoint

app.post("/api/comment", (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.send(newComment);
});

// TODO (step5.3, step5.4): implement middleware for /api routes

// anything else falls to this "not found" case
app.all("*", (req, res) => {
  console.log(`Route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "Route not found" });
});

// any server errors cause this function to run
app.use((err, req, res, next) => {
  const status = err.status || 500;
  if (status === 500) {
    // 500 means Internal Server Error
    console.log("The server errored when processing a request");
    console.log(err);
  }

  res.status(status);
  res.send({
    status: status,
    message: err.message,
  });
});

// hardcode port to 3000 for now
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
