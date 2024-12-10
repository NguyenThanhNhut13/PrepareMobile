import { configureStore } from '@reduxjs/toolkit';
import bikeSlice from './slice/bikeSlice';

const store = configureStore({
  reducer: {
    bikes: bikeSlice,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store;