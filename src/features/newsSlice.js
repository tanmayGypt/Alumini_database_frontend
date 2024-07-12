import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    newsData: [
        {
          id: nanoid(),
          title: 'Alumni Award Winners Announced',
          date: '14th Jul, 2023',
          description: 'Our distinguished alumni have been recognized for their outstanding contributions in various fields.',
          image: 'src/assets/medal.png'
        },
        {
          id: nanoid(),
          title: 'New Alumni Mentorship Program Launch',
          date: '14th Jul, 2023',
          description: 'We are excited to announce the launch of our new mentorship program, connecting students with experienced alumni.',
          image: 'src/assets/congratulation.png'
        },
        {
          id: nanoid(),    
          title: 'Congratulations "Name" For Qualifying Gate-2023',
          date: '10th Jul, 2023',
          description: 'BPIT FAMILY CONGRATULATES Ms. Sunanda & Mr. Krishna Kishor for Qualifying GATE-2023. Your hard work, dedication, and perseverance have paid off, and you should be extremely proud of your achievement.',
          image: 'src/assets/discussion.png'
        },
        {
          id: nanoid(),  
          title: 'New Alumni Mentorship Program Launch',
          date: '14th Jul, 2023',
          description: 'We are excited to announce the launch of our new mentorship program, connecting students with experienced alumni.',
          image: 'src/assets/congratulation.png'
        }
      ]
}

const newsSlice = createSlice({
    name : 'news',
    initialState,
    reducers :{
        addNews : {
            reducer : (state , action) => {
                state.newsData.push(action.payload)
            },
            prepare : (title, date, description, image) => ({
                payload : {
                    id : nanoid(),
                    title,
                    date,
                    description,
                    image
                    
                }
            })
        }
    }
})

export const {addNews} = newsSlice.actions
export default newsSlice.reducer