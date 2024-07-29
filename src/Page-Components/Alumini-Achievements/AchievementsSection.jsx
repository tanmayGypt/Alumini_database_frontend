// src/components/AchievementsSection.js
import { useEffect, useContext } from "react";
import Heading from "../Heading";
import AchievementCard from "./AchievementCard";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllAchievements } from '../../features/achievementSlice';
import { SearchContext } from '../../Context/SearchContext';

const AchievementsSection = () => {
  const dispatch = useDispatch();
  const achievements = useSelector((state) => state.achievements.achievements);
  const status = useSelector((state) => state.achievements.status);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllAchievements());
    }
  }, [status, dispatch]);

  const filteredAchievements = achievements.filter(
    (achievement) =>
      achievement.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.Description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(achievements);

  return (
    <div className="container m-auto px-35 py-30">
      <Heading />
      <SearchBar />

      <div className="bg-gray-100 rounded-xl shadow-lg">
        {filteredAchievements.map((item) => (
          <AchievementCard 
          key={item.AchievementID}
          title={item.Title}
          date={item.DateAchieved}
          description={item.Description}
        />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
