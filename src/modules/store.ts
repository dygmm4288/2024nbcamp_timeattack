import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import authSliceRe from "./auth/authSliceRe";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      authRe: authSliceRe,
    },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
