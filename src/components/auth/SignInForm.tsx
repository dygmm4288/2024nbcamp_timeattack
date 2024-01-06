"use client";
import { login } from "@/app/api/route";
import Link from "next/link";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import Input from "./Input";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange =
    (setter: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await login({ id: email, password });
      if (res.success) {
        // TODO : 로그인 성공 시 처리 로직 구현해야 함
        console.log("로그인 성공!");
        return;
      }
    } catch (err) {
      // TODO: 에러 처리 해야 됨
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Input
        id='email'
        label='이메일'
        placeholder='이메일을 입력해주세요'
        value={email}
        handleChange={handleChange(setEmail)}
      />
      <Input
        id='password'
        label='비밀번호'
        placeholder='비밀번호를 입력해주세요'
        value={password}
        handleChange={handleChange(setPassword)}
      />
      <Link href='/signup'>비밀번호를 잊으셨나요?</Link>
      <button type='submit'>로그인</button>
    </form>
  );
}
