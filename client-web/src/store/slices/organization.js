import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orgEvents: []
}

export const organizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
      setOrgEvents: (state, action) => {
        state.orgEvents = action.payload
      }
    },
  })
  
  
  
  export const { setOrgEvents } = organizationSlice.actions
  export default organizationSlice.reducer
  
  