import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./auth/authReducer";
import profileReducer from "./profile/profileReducer";
import signupReducer from "./signup/signupReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    signup: signupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
