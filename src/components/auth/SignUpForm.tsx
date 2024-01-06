"use client";

import { register } from "@/app/api/route";
import { checkValidEmail } from "@/lib/valid";
import {
  setEmail,
  setError,
  setInitError,
  setNickname,
  setPassword,
  setPasswordConfirm,
} from "@/modules/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks/hook";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect } from "react";
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
  const router = useRouter();

  const handleChange =
    (setter: Function) => (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setter(e.target.value));
    };
  // TODO : value 초기화 작업 해야 함
  useEffect(() => {}, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInitError();
    if (password !== passwordConfirm) {
      dispatch(
        setError({ key: "password", value: "비밀번호가 일치하지 않습니다." }),
      );
      dispatch(setPassword(""));
      dispatch(setPasswordConfirm(""));
      return;
    }
    if (!checkValidEmail(email)) {
      dispatch(
        setError({ key: "email", value: "올바른 이메일 주소를 입력해주세요" }),
      );
      dispatch(setEmail(""));
      return;
    }
    try {
      const response = await register({ id: email, password, nickname });
      if (response.success) {
        router.push("/signin");
        return;
      }
    } catch (err) {
      // TODO: Error 핸들링 해야 한다.
    }
  };

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
