"use client";

import {
  setEmail,
  setNickname,
  setPassword,
  setPasswordConfirm,
} from "@/modules/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks/hook";
import { ChangeEvent, useEffect } from "react";
import Input from "./Input";

const staticRenderData = [
  { label: "닉네임", placeholder: "닉네임을 입력해주세요", id: "nickname" },
  { label: "이메일", placeholder: "이메일을 입력해주세요", id: "email" },
  {
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요",
    id: "password",
    type: "password",
  },
  {
    label: "비밀번호 확인",
    placeholder: "비밀번호를 다시 입력해주세요",
    id: "passwordConfirm",
    type: "password",
  },
];

export default function SignUpForm() {
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
  // TODO : value 초기화 작업 해야 함
  useEffect(() => {}, []);
  const handleSubmit = async () => {};

  const inputsValue = values.map((value, index) => ({
    value,
    handleChange: handleChange(setters[index]),
  }));
  return (
    <form onSubmit={handleSubmit}>
      {staticRenderData.map((data, index) => (
        <Input key={data.id} {...data} {...inputsValue[index]} />
      ))}
      <button type='submit'>다음</button>
    </form>
  );
}
