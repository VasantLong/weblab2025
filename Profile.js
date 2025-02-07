const Profile = (props) => {
  return (
    <div>
      <img src={props.profilePicture} />
      <div>
        <span>{props.username}</span>
        <span>{props.handle}</span>
      </div>
      <button>Follow</button>
    </div>
  );
};
