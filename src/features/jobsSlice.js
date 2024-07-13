// src/features/jobsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allJobs: [
    {
      id: 1,
      type: 'Part Time',
      salary: '15k / Mo',
      title: 'UI/UX Designer',
      company: 'Epic coders',
      skills: ['UI', 'UX', 'PHOTOSHOP'],
      description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
    },
    {
      id: 2,
      type: 'Full Time',
      salary: '20k / Mo',
      title: 'Web Developer',
      company: 'Infracom Ltd.',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
      description: 'Looking for an experienced person to help us with rebranding our business. We are interested in a ...',
    },
    {
      id: 3,
      type: 'Part Time',
      salary: '15k / Mo',
      title: 'UI/UX Designer',
      company: 'Epic coders',
      skills: ['UI', 'UX', 'PHOTOSHOP'],
      description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
    },
    {
      id: 4,
      type: 'Full Time',
      salary: '25k / Mo',
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      skills: ['JavaScript', 'React', 'Node.js'],
      description: 'Join our team to work on cutting-edge software solutions ...',
    },
    {
      id: 1,
      type: 'Part Time',
      salary: '15k / Mo',
      title: 'UI/UX Designer',
      company: 'Epic coders',
      skills: ['UI', 'UX', 'PHOTOSHOP'],
      description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
    },
    {
      id: 2,
      type: 'Full Time',
      salary: '20k / Mo',
      title: 'Web Developer',
      company: 'Infracom Ltd.',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
      description: 'Looking for an experienced person to help us with rebranding our business. We are interested in a ...',
    },
    {
      id: 3,
      type: 'Part Time',
      salary: '15k / Mo',
      title: 'UI/UX Designer',
      company: 'Epic coders',
      skills: ['UI', 'UX', 'PHOTOSHOP'],
      description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
    },
    {
      id: 4,
      type: 'Full Time',
      salary: '25k / Mo',
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      skills: ['JavaScript', 'React', 'Node.js'],
      description: 'Join our team to work on cutting-edge software solutions ...',
    },
    {
      id: 1,
      type: 'Part Time',
      salary: '15k / Mo',
      title: 'UI/UX Designer',
      company: 'Epic coders',
      skills: ['UI', 'UX', 'PHOTOSHOP'],
      description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
    },
    {
      id: 2,
      type: 'Full Time',
      salary: '20k / Mo',
      title: 'Web Developer',
      company: 'Infracom Ltd.',
      skills: ['HTML', 'CSS', 'JAVASCRIPT'],
      description: 'Looking for an experienced person to help us with rebranding our business. We are interested in a ...',
    },
    {
      id: 3,
      type: 'Part Time',
      salary: '15k / Mo',
      title: 'UI/UX Designer',
      company: 'Epic coders',
      skills: ['UI', 'UX', 'PHOTOSHOP'],
      description: 'We are looking for an experienced UI and UX designer to work on our new projects ...',
    },
    {
      id: 4,
      type: 'Full Time',
      salary: '25k / Mo',
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      skills: ['JavaScript', 'React', 'Node.js'],
      description: 'Join our team to work on cutting-edge software solutions ...',
    },
    // Add more jobs as needed
  ],
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
});

export const selectMentorshipJobs = (state) => state.jobs.allJobs.slice(0, 3);
export const selectJobBoardJobs = (state) => state.jobs.allJobs.slice(0); 

export default jobsSlice.reducer;
