import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from '../features/jobsSlice';
import newsReducer from '../features/newsSlice'
import achievementsReducer from '../features/AchievementSlice'

export const store = configureStore({
  reducer: {
    news : newsReducer,
    jobs: jobsReducer,
    achievements: achievementsReducer,
  },
});