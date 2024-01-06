"use client";
import { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";
import { initializeAuthState } from "./auth/authSlice";
import { AppStore, makeStore } from "./store";

export default function StoreProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeAuthState());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
