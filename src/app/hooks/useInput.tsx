import {
  setEmail,
  setNickname,
  setPassword,
  setPasswordConfirm,
} from "@/modules/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks/hook";
import { ChangeEvent } from "react";

export default function useInput() {
  const { nickname, email, password, passwordConfirm } = useAppSelector(
    (state) => state.auth,
  );
  const dispatch = useAppDispatch();
  const setters = [setNickname, setEmail, setPassword, setPasswordConfirm];
  const values = [nickname, email, password, passwordConfirm];

  const handleChange =
    (setter: Function) => (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setter(e.target.value));
    };

  return values.map((value, index) => ({
    value,
    handleChange: handleChange(setters[index]),
  }));
}
