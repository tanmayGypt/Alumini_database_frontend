import React, { useState } from 'react';
import Heading from '../Heading';
import AchievementCard from './AchievementCard';
import SearchBar from './SearchBar';

const AchievementsSection = () => {
  const [achievements, setAchievements] = useState([
    {
      title: 'CONGRATULATIONS FOR QUALIFYING GATE-2023',
      date: '17th Jul, 2023',
      message: 'BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement. This success is a testament to your knowledge, skills, and the effort you put into your studies. Best wishes for your future endeavors!',
      imageUrl: 'src/assets/FemaleAvatar.jpeg'
    }
    // We Can add more achivements here 
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAchievements = achievements.filter(achievement => 
    achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    achievement.message.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="container m-auto px-35 py-30">
      <Heading />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      <div className='bg-gray-100 rounded-xl shadow-lg'>
        <div>
        {filteredAchievements.map((achievement, index) => (
        <AchievementCard 
          key={index} 
          title={achievement.title} 
          date={achievement.date} 
          message={achievement.message}
          imageUrl={achievement.imageUrl} 
        />
      ))}
        </div>
        <div>
        {filteredAchievements.map((achievement, index) => (
        <AchievementCard 
          key={index} 
          title={achievement.title} 
          date={achievement.date} 
          message={achievement.message} 
          imageUrl={achievement.imageUrl}
        />
      ))}
        </div>
      
      </div>
      
    </div>
  );
};

export default AchievementsSection;
