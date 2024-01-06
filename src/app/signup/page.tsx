"use client";

import OAuthContainer from "@/components/auth/OAuthContainer";
import SignUpForm from "@/components/auth/SignUpForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

export default function SignUp() {
  const [isOAuthMode, setOAuthMode] = useState(true);
  const handleSetOAuthMode = () => {
    setOAuthMode(false);
  };
  const { isLogin } = useAuth();

  const router = useRouter();
  useEffect(() => {
    if (isLogin) router.push("/signin");
  }, []);

  return (
    <section className='bg-gray-50 py-40 px-16 w-1/2 rounded-xl flex flex-col gap-3'>
      <h2 className='font-bold text-3xl text-center my-4'>회원가입</h2>
      {!isOAuthMode && <SignUpForm />}
      <OAuthContainer />
      {isOAuthMode && (
        <div
          className='border-solid border-gray-200 border-t-2 pt-5'
          onClick={handleSetOAuthMode}>
          <button
            type='button'
            className='w-full rounded-md py-4 bg-blue-900 text-white font-bold'>
            이메일 주소로 시작하기
          </button>
        </div>
      )}
      <p className="'w-full flex flex-row justify-center items-center gap-2 text-gray-500 opacity-90'>">
        이미 계정이 있으신가요?
        <Link
          className='block text-right text-black opacity-100'
          href='/signin'>
          로그인
        </Link>
      </p>
    </section>
  );
}
