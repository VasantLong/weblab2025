import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Photos from "./Photos";
import Post from "./Post";

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Intro />
        <Photos />
      </div>
      <Post />
    </div>
  );
};

export default App;
