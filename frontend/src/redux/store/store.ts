import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartSlice from "../slices/cartSlice";
import userSlice from "../slices/userSlice";
import flowerSlice from "../slices/flowerSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    flower: flowerSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
