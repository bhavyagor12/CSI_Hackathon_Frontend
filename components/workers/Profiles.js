import faker from "faker";
import { useEffect, useState } from "react";
import Profile from "../../components/workers/Profile";
const Profiles = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);
  return (
    <div>
      {suggestions.map((profile) => {
        <Profile
          username={profile.username}
          name={profile.name}
          address={profile.address}
          phone={profile.phone}
          email={profile.email}
        />;
      })}
    </div>
  );
};

export default Profiles;
