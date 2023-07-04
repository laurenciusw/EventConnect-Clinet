import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogin: false,
  currentEvents: null,
  pastEvents: null,
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
    setProfile: (state, action) => {
      state.profile = action.payload
    }
  },
})



export const { setUser, setCurrentEvents, setPastEvents, setProfile } = userSlice.actions
export default userSlice.reducer


