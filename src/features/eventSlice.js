import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch event details
export const fetchEventDetails = createAsyncThunk(
  'event/fetchEventDetails',
  async (eventId, { getState }) => {
    const { token } = getState().auth; // Assuming you have an auth slice with token
    const response = await axios.get(`https://alumnibackend.up.railway.app/event/${eventId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
);

const initialState = {
  eventData: [],
  status: 'idle',
  error: null
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEventData: {
      reducer: (state, action) => {
        state.eventData.push(action.payload);
      },
      prepare: (image, title, date, location, description, eventType, modeOfEvent) => ({
        payload: {
          id: nanoid(),
          image,
          title,
          date,
          location,
          description,
          eventType,
          modeOfEvent
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEventDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.eventData.push(action.payload);
      })
      .addCase(fetchEventDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addEventData } = eventSlice.actions;
export default eventSlice.reducer;
