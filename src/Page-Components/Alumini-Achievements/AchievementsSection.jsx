import { useState } from "react";
import Heading from "../Heading";
import AchievementCard from "./AchievementCard";
import SearchBar from "./SearchBar";
import { useSelector } from 'react-redux';


const AchievementsSection = () => {
  const achievements = useSelector((state) => state.achievements.achievements.slice(0,2)) 

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAchievements = achievements.filter(
    (achievement) =>
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container m-auto px-35 py-30">
      <Heading />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <div className="bg-gray-100 rounded-xl shadow-lg">
      {achievements.map((item) => (
          <AchievementCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
