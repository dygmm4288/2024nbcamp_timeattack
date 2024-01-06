"use client";
import { login } from "@/app/api/route";
import useInput from "@/app/hooks/useInput";
import { setAuthState } from "@/modules/auth/authSliceRe";
import { useAppDispatch } from "@/modules/hooks/hook";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import Input from "./Input";

export default function SignInForm() {
  const [email, handleChangeEmail, setEmailError] = useInput("");
  const [password, handleChangePassword, setPasswordError] = useInput("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await login({ id: email.value, password: password.value });
      if (res.success) {
        // TODO : 로그인 성공 시 처리 로직 구현해야 함
        const { accessToken, avatar, nickname, userId } = res;
        dispatch(
          setAuthState({
            accessToken,
            avatar,
            nickname,
            userId,
          }),
        );
        router.push("/");
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
        value={email.value}
        handleChange={handleChangeEmail}
        errorMessage={email.error}
      />
      <Input
        id='password'
        type='password'
        label='비밀번호'
        placeholder='비밀번호를 입력해주세요'
        value={password.value}
        handleChange={handleChangePassword}
        errorMessage={password.error}
      />
      <Link href='/signup'>비밀번호를 잊으셨나요?</Link>
      <button type='submit'>로그인</button>
    </form>
  );
}
