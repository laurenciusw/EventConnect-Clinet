import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import eventReducer from './slices/event'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    event: eventReducer,
  },
})