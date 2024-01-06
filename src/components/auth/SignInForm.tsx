"use client";
import { login } from "@/app/api/route";
import useInput from "@/app/hooks/useInput";
import { checkValidEmail } from "@/lib/valid";
import { setAuthState } from "@/modules/auth/authSliceRe";
import { useAppDispatch } from "@/modules/hooks/hook";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import Input from "./Input";

export default function SignInForm() {
  const [email, handleChangeEmail, setEmailError] = useInput("");
  const [password, handleChangePassword, setPasswordError] = useInput("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidEmail = checkValidEmail(email.value);
    if (!isValidEmail) {
      toast.error("이메일 형식이 올바르지 않습니다.");
      setEmailError("이메일 형식이 올바르지 않습니다.");
      return;
    }
    try {
      const res = await login({ id: email.value, password: password.value });
      if (res.success) {
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
    } catch (error) {
      // TODO: 에러 처리 해야 됨
      const err = error as AxiosError;
      const { message } = err.response!.data as { message: string };
      toast.error(message);
      console.log(message);
      if (message === "존재하지 않는 유저입니다.") {
        setEmailError(message);
      }
      if (
        message === "비밀번호가 일치하지 않습니다." ||
        message === "password는 4글자 이상의 문자열이어야 합니다."
      ) {
        setPasswordError(message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <Input
          id='email'
          label='이메일'
          placeholder='이메일을 입력해주세요'
          value={email.value}
          handleChange={handleChangeEmail}
          errorMessage={null}
        />
        <Input
          id='password'
          type='password'
          label='비밀번호'
          placeholder='비밀번호를 입력해주세요'
          value={password.value}
          handleChange={handleChangePassword}
          errorMessage={null}
        />
        <Link href='/signup'>비밀번호를 잊으셨나요?</Link>
        <button type='submit'>로그인</button>
      </form>
      <ToastContainer />
    </>
  );
}
