const Feed = () => {
  const [posts, setPosts] = useState([]);
  const loadTweets = (() => {
    setTweetData(loadedTweets);
  })();
  return (
    <div>
      <Tweet username={tweetData[0].username} />
    </div>
  );
};

export default Feed;
