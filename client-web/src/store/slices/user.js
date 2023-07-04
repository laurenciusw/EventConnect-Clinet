import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogin: localStorage.access_token,
  currentEvents: null,
  pastEvents: null,
  registeredEvents: null,
  profile: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setCurrentEvents: (state, action) => {
      state.currentEvents = action.payload
    },
    setPastEvents: (state, action) => {
      state.pastEvents = action.payload
    },
    setRegisteredEvents: (state, action) => {
      state.registeredEvents = action.payload
    },
    setProfile: (state, action) => {
      state.profile = action.payload
    }
  },
})



export const { setUser, setCurrentEvents, setPastEvents, setProfile, setRegisteredEvents } = userSlice.actions
export default userSlice.reducer


