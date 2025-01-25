import { configureStore } from "@reduxjs/toolkit";
// import reducers
import { topicsSlice } from '../features/topics/topicsSlice';

export default configureStore({
  reducer: {
    topics: topicsSlice.reducer
  },
});
