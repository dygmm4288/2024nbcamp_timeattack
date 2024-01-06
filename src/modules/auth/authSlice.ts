import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  nickname: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setPasswordConfirm(state, action: PayloadAction<string>) {
      state.passwordConfirm = action.payload;
    },
  },
});
export const { setEmail, setNickname, setPassword, setPasswordConfirm } =
  authSlice.actions;
export default authSlice.reducer;
