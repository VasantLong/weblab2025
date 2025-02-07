import React from "react";
import NavBar from "./NavBar";
import Feed from "./Feed";
import Intro from "./Intro";
import Photos from "./Photos";
import Post from "./Post";
import Suggestions from "./Suggestions";
import Trending from "./Trending";

const App = () => {
  return (
    <div>
      <NavBar />
      <Feed />
      <div>
        <Intro />
        <Photos />
      </div>
      <Post />
      <div>
        <Trending />
        <Suggestions />
      </div>
    </div>
  );
};

export default App;
