import { configureStore } from "@reduxjs/toolkit";
import newsReducer from '../features/newsSlice'
import jobsReducer from '../features/jobsSlice';

export const store = configureStore({
  reducer: {
    news : newsReducer,
    jobs: jobsReducer
  },
});