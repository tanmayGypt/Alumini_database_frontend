import { useState } from "react";
import Heading from "../Heading";
import AchievementCard from "./AchievementCard";
import SearchBar from "./SearchBar";
import { useSelector } from 'react-redux';
import { SearchContext } from '../../Context/SearchContext';
import { useContext } from "react";



const AchievementsSection = () => {
  const achievements = useSelector((state) => state.achievements.achievements) 

  const {searchTerm} = useContext(SearchContext)


 

  const filteredAchievements = achievements.filter(
    (achievement) =>
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container m-auto px-35 py-30">
      <Heading />
      <SearchBar />

      <div className="bg-gray-100 rounded-xl shadow-lg">
      {filteredAchievements.map((item) => (
          <AchievementCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;