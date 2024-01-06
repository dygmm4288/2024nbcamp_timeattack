import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type AuthState = {
  accessToken: string;
  userId: string;
  avatar: string;
  nickname: string;
};

const initialState: AuthState = {
  accessToken: "",
  userId: "",
  avatar: "",
  nickname: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state, action: PayloadAction<Partial<AuthState>>) {
      JSON.stringify(
        localStorage.setItem("auth", JSON.stringify(action.payload)),
      );
      return { ...state, ...action.payload };
    },
    initializeAuthState() {
      const item = JSON.parse(localStorage.getItem("auth") || "null");
      if (!item) {
        return { ...initialState };
      }

      return item;
    },
  },
});

export const { setAuthState, initializeAuthState } = authSlice.actions;
export default authSlice.reducer;
