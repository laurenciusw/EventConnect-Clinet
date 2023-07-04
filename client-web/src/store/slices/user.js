import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogin: false,
  currentEvents: null,
  pastEvents: null,
  profile: null,
  checkPass: null,
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
    },
    setCheckPass: (state, action) => {
      state.checkPass = action.payload
    }
  },
})



export const { setUser, setCurrentEvents, setPastEvents, setProfile, setCheckPass } = userSlice.actions
export default userSlice.reducer


