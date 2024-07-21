import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    achievements :[
      {
        id: nanoid(),
        title: "CONGRATULATIONS FOR QUALIFYING GATE-2023",
        date: "17th Jul, 2023",
        message: "BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement. This success is a testament to your knowledge, skills, and the effort you put into your studies. Best wishes for your future endeavors!",
        imageUrl: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
      },
      {
        id: nanoid(),
        title: "BPIT FAMILY CHEERS CAT-2024 SUCCESS",
        date: "18th Jul, 2023",
        message: "BPIT FAMILY CHEERS Ms. Rina & Mr. Ravi Sharma for their excellent performance in CAT-2024. Your diligence and hard work have yielded great results. Heartiest congratulations on your success. May you achieve even greater milestones!",
        imageUrl: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
      },
      {
        id: nanoid(),
        title: "ACHIEVEMENT IN CAT-2023",
        date: "19th Jul, 2023",
        message: "Congratulations to Mr. Amit & Ms. Sneha for clearing CAT-2023. Your perseverance and determination are truly inspiring. Wishing you all the best for your future academic and professional pursuits!",
        imageUrl: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
      },
      {
        id: nanoid(),
        title: "SUCCESS IN GATE-2024",
        date: "20th Jul, 2023",
        message: "Heartiest congratulations to Mr. Arjun & Ms. Priya for their success in GATE-2024. Your dedication and commitment have led you to this achievement. May you continue to reach new heights in your career!",
        imageUrl: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
      },
    ]
    
}

const achievementsSlice = createSlice({
    name: 'achievements',
    initialState,
    reducers: {
      addAchievement: {
        reducer: (state, action) => {
          state.achievements.push(action.payload);
        },
        prepare: (title, date, message, imageUrl) => ({
          payload: {
            id: nanoid(),
            title,
            date,
            message,
            imageUrl
          }
        })
      },
    },
  });
  
  export const { addAchievement } = achievementsSlice.actions;
  export default achievementsSlice.reducer;