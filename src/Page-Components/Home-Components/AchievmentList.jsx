import * as React from 'react';
import Box from '@mui/material/Box';
import AchievementCard from '../Alumini-Achievements/AchievementCard';
import { useState } from "react";
import { useSelector } from 'react-redux';



export default function AchievementList() {

    const achievements = useSelector((state) => state.achievements.achievements) 

    
  return (
    <Box sx={{  width:'90%',
                height: { xs: 300, sm: 350, md: 400, lg: 450, xl: 500 }, 
                overflowY: 'scroll' }}>
       {achievements.map((achievement, index) => (
                    <AchievementCard
                        key={index}
                        title={achievement.title}
                        date={achievement.date}
                        message={achievement.message}
                        imageUrl={achievement.imageUrl}
                        description={achievement.description}
                    />
                ))}
    </Box>
  );
}
