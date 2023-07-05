import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orgEvents: [],
  userList: [],
  userPending: [],
  user: null
}

export const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    setOrgEvents: (state, action) => {
      state.orgEvents = action.payload
    },
    setUserList: (state, action) => {
      state.userList = action.payload
    },
    setUserPending: (state, action) => {
      state.userPending = action.payload
    },
    setUserDetail: (state, action) => {
      state.user = action.payload
    },
  },
})



export const { setOrgEvents, setUserList, setUserPending, setUserDetail } = organizationSlice.actions
export default organizationSlice.reducer

