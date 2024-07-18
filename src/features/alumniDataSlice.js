import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    alumniData : [
        { id: nanoid(),
          name: "Dummy Name",
          role: "Web Developer",
          achievement:
            "achieved an impressive milestone by securing a ₹1.2 Crore package at a top multinational tech company.",
          year: "Class of 2015",
        },
        { id: nanoid(),
          name: "Jane Smith",
          role: "Software Engineer",
          achievement:
            "achieved an impressive milestone by securing a ₹1.2 Crore package at a top multinational tech company.",
          year: "Class of 2015",
        },
        { id: nanoid(),
          name: "Alice Johnson",
          role: "Data Scientist",
          achievement:
            "achieved an impressive milestone by securing a ₹1.2 Crore package at a top multinational tech company.",
          year: "Class of 2015",
        },
        { id: nanoid(),
          name: "Bob Brown",
          role: "Product Manager",
          achievement:
            "achieved an impressive milestone by securing a ₹1.2 Crore package at a top multinational tech company..",
          year: "Class of 2015",
        },
        { id: nanoid(),
          name: "Chris Green",
          role: "DevOps Engineer",
          achievement:
            "achieved an impressive milestone by securing a ₹1.2 Crore package at a top multinational tech company.",
          year: "Class of 2015",
        },
    ]
}

const alumniDataSlice = createSlice({
  name :'alumniDataSlice',
  initialState,
  reducers : {
    addAlumniData : {
      reducer : (state , action) => {
        state.alumniData.push(action.payload)
      },
      prepare : (name, role, achievement, year) => ({
        payload : {
            id : nanoid(),
            name,
            role,
            achievement,
            year
            
        }
    })

    }
  }
})

export const {addAlumniData} = alumniDataSlice.actions
export default alumniDataSlice.reducer