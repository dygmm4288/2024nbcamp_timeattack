import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type AuthState = {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  nicknameError: null | string;
  emailError: null | string;
  passwordError: null | string;
};

const initialState: AuthState = {
  nickname: "",
  email: "",
  password: "",
  passwordConfirm: "",
  nicknameError: null,
  emailError: null,
  passwordError: null,
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
    setInitState(state) {
      state = { ...initialState };
    },
    setError(state, action: PayloadAction<{ key: string; value: string }>) {
      const { key } = action.payload;
      if (key === "nickname") {
        state.nicknameError = action.payload.value;
      }
      if (key === "email") {
        state.emailError = action.payload.value;
      }
      if (key === "password") {
        state.passwordError = action.payload.value;
      }
    },
    setInitError(state) {
      state.nicknameError = null;
      state.emailError = null;
      state.passwordError = null;
    },
  },
});
export const {
  setEmail,
  setNickname,
  setPassword,
  setPasswordConfirm,
  setError,
  setInitError,
} = authSlice.actions;
export default authSlice.reducer;
