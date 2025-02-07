const Tweet = (props) => {
  return (
    <div className="tweet-header">
      <img src={props.profilePicture} />
      <span>{props.username}</span>
      <span>{props.dataPosted}</span>
      <p>{props.content}</p>
    </div>
  );
};
