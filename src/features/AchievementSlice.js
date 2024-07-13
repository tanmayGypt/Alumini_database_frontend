import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    achievements : [
            {id: nanoid(),
            title: "CONGRATULATIONS FOR QUALIFYING GATE-2023",
            date: "17th Jul, 2023",
            message:
              "BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement. This success is a testament to your knowledge, skills, and the effort you put into your studies. Best wishes for your future endeavors!",
            imageUrl:
              "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
            },
            {id: nanoid(),
            title: "CONGRATULATIONS FOR QUALIFYING GATE-2023",
            date: "17th Jul, 2023",
            message: "BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement. This success is a testament to your knowledge, skills, and the effort you put into your studies. Best wishes for your future endeavors!",
            imageUrl:
                  "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
                },
            {
                id: nanoid(),
            title: "CONGRATULATIONS FOR QUALIFYING GATE-2023",
            date: "17th Jul, 2023",
            message:
              "BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement. This success is a testament to your knowledge, skills, and the effort you put into your studies. Best wishes for your future endeavors!",
            imageUrl:
              "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
            },
            { id: nanoid(),
            title: "CONGRATULATIONS FOR QUALIFYING GATE-2023",
            date: "17th Jul, 2023",
            message: "BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement. This success is a testament to your knowledge, skills, and the effort you put into your studies. Best wishes for your future endeavors!",
            imageUrl:
                  "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
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