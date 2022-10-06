import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./states/counter";


export default configureStore({
  reducer: {
    counter: counterReducer
  }
})