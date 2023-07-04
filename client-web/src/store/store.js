import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import eventReducer from './slices/event'
import userReducer from './slices/user'
import organizerReducer from './slices/organization'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    event: eventReducer,
    user: userReducer,
    organizer: organizerReducer
  },
})