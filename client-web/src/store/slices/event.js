import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  event: null
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setEvent: (state, action) => {
      state.event = action.payload
    },
  },
})



export const { setData, setEvent } = eventSlice.actions
export default eventSlice.reducer


