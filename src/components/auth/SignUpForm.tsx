"use client";

import { register } from "@/app/api/route";
import useInput from "@/app/hooks/useInput";
import {
  ERROR_MESSAGE,
  checkValidEmail,
  checkValidNickname,
  checkValidPassword,
  checkValidPasswordConfirm,
} from "@/lib/valid";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import Input from "./Input";

export default function SignUpForm() {
  const [nickname, handleChangeNickname, setNicknameError] = useInput("");
  const [email, handleChangeEmail, setEmailError] = useInput("");
  const [password, handleChangePassword, setPasswordError] = useInput("");
  const [
    passwordConfirm,
    handleChangePasswordConfirm,
    setPasswordConfirmError,
  ] = useInput("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidPasswordConfirm = checkValidPasswordConfirm(
      password.value,
      passwordConfirm.value,
    );
    const isValidEmail = checkValidEmail(email.value);
    const isValidNickname = checkValidNickname(nickname.value);
    const isValidPassword = checkValidPassword(password.value);

    const isValidForm =
      isValidPassword &&
      isValidEmail &&
      isValidNickname &&
      isValidPasswordConfirm;

    if (!isValidPassword) {
      setPasswordError(ERROR_MESSAGE.PASSWORD);
    }
    if (!isValidPasswordConfirm) {
      setPasswordConfirmError(ERROR_MESSAGE.PASSWORD_CONFIRM);
    }
    if (!isValidEmail) {
      setEmailError(ERROR_MESSAGE.EMAIL);
    }
    if (!isValidNickname) {
      setNicknameError(ERROR_MESSAGE.NICKNAME);
    }

    if (isValidForm) {
      try {
        const response = await register({
          id: email.value,
          nickname: nickname.value,
          password: password.value,
        });
        if (response.success) {
          router.push("/signin");
          return;
        }
      } catch (error) {
        const err = error as AxiosError;
        const { data } = err.response as { data: { message: string } };
        if (data.message === "이미 존재하는 이메일입니다.") {
          setEmailError(data.message);
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='border-solid border-b-2 border-b-gray-200 pb-6 mb-4 relative'>
      <Input
        id='nickname'
        label='닉네임'
        placeholder='닉네임을 입력해주세요.'
        handleChange={handleChangeNickname}
        value={nickname.value}
        errorMessage={nickname.error}
      />
      <Input
        id='email'
        label='이메일'
        placeholder='이메일 주소를 입력해주세요.'
        handleChange={handleChangeEmail}
        value={email.value}
        errorMessage={email.error}
      />
      <Input
        id='password'
        label='비밀번호'
        placeholder='비밀번호를 입력해주세요.'
        handleChange={handleChangePassword}
        value={password.value}
        errorMessage={password.error}
        type='password'
      />
      <Input
        id='passwordConfirm'
        label='비밀번호 확인'
        placeholder='비밀번호를 다시 입력해주세요.'
        handleChange={handleChangePasswordConfirm}
        value={passwordConfirm.value}
        errorMessage={passwordConfirm.error}
        type='password'
      />

      <button
        type='submit'
        className='w-full rounded-md py-4 bg-blue-900 text-white font-bold'>
        다음
      </button>
      <span className='absolute -bottom-3 left-1/2 -translate-x-1/2 block bg-gray-50 text-gray-300 px-4'>
        또는
      </span>
    </form>
  );
}
