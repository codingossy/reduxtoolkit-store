import { configureStore } from "@reduxjs/toolkit";
import CartsReducer from "../store/CartSlice";

export default configureStore({
  reducer: {
    items: CartsReducer,
  },
});
