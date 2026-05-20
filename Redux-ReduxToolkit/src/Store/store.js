import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

let store = configureStore({
      reducer:{
        todo:todoSlice.reducer,
        // counter:countSlice.reducer
            }
});
export default store;