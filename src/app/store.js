import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from '../features/jobsSlice';

export const store = configureStore({
  reducer: {
    news : newsReducer,
    jobs: jobsReducer
  },
});

