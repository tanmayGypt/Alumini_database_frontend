import * as React from 'react';
import Box from '@mui/material/Box';
import AchievementCard from '../Alumini-Achievements/AchievementCard';
import { useState } from "react";


export default function AchievementList() {
    const [achievements, setAchievements] = useState([
        {
            title: "CONGRATULATIONS FOR QUALIFYING GATE-2023",
            date: "17th Jul, 2023",
            message:
                "BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement. ",
            imageUrl: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
            description: "This achievement marks a significant milestone in their academic journey."
        },
        {
            title: "CONGRATULATIONS FOR QUALIFYING GATE-2023",
            date: "17th Jul, 2023",
            message:
                "BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement.",
            imageUrl: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
            description: "Celebrating their outstanding performance in GATE-2023."
        },
        {
            title: "CONGRATULATIONS FOR QUALIFYING GATE-2023",
            date: "17th Jul, 2023",
            message:
                "BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement.",
            imageUrl: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
            description: "Celebrating their outstanding performance in GATE-2023."
        },
        {
            title: "CONGRATULATIONS FOR QUALIFYING GATE-2023",
            date: "17th Jul, 2023",
            message:
                "BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement.",
            imageUrl: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
            description: "Celebrating their outstanding performance in GATE-2023."
        }
        // We Can add more achievements here
    ]);
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
