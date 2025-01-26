import React, { useState } from "react";
const CommentReply = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div classname="comment-text">
      <h5>{props.name}</h5>
      <p>{props.content}</p>
    </div>
  );
};

export default CommentReply;
