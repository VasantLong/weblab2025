const Suggestions = () => {
  const [profileData, setProfileData] = useState([]);

  const loadSuggestions = (() => {
    // Load suggested profiles from API...
    setProfileData(loadedProfiles);
  })();

  return (
    <div>
      <Profile username={profileData[0].username} />
      <Profile username={profileData[1].username} />
      <Profile username={profileData[2].username} />
    </div>
  );
};
