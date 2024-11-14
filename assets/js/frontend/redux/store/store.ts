import { configureStore } from "@reduxjs/toolkit";
import { reportListReducer } from "../reducers/reportReducer";

const store = configureStore({
  reducer: {
    reportListReducer,
  },
});

export default store;
