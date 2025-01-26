import React from "react";
const Photos = (props) => {
  const myImageTags = props.links.map((photoLink) => (
    <img src={photoLink} alt="Example" />
  ));
  return (
    <div>
      <h3>Photos</h3>
      <p>{myImageTags}</p>
    </div>
  );
};

export default Photos;
