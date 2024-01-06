import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Input from "./Input";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange =
    (setter: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  return (
    <form>
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
