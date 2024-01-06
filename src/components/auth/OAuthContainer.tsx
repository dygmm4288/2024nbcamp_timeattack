"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";

export default function OAuthContainer() {
  return (
    <div className='flex flex-col gap-4 mb-4'>
      <OAuthButton color='text-black' background='bg-yellow-300'>
        카카오로 3초만에 시작하기
      </OAuthButton>
      <OAuthButton color='text-white' background='bg-black'>
        구글로 시작하기
      </OAuthButton>
      <OAuthButton color='text-white' background='bg-black'>
        apple로 시작하기
      </OAuthButton>
    </div>
  );
}
interface Props extends PropsWithChildren {
  color: string;
  background: string;
}
function OAuthButton({ children, color, background }: Props) {
  return (
    <Link
      href='/login'
      className={`w-full rounded-md py-4 block text-center ${color} ${background}`}>
      {children}
    </Link>
  );
}
