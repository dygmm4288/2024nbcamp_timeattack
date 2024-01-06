import OAuthContainer from "@/components/auth/OAuthContainer";
import SignInForm from "@/components/auth/SignInForm";
import Link from "next/link";

export default function SignIn() {
  return (
    <section className='bg-gray-50 py-40 px-16 w-1/2 rounded-xl flex flex-col justify-between'>
      <h2 className='font-bold text-3xl text-center my-4'>로그인</h2>
      <SignInForm />
      <OAuthContainer />
      <p className='w-full flex flex-row justify-center items-center gap-2 text-gray-500 opacity-90'>
        밀리그램 회원이 아니신가요?
        <Link
          className='block text-right text-black opacity-100'
          href='/signup'>
          회원가입
        </Link>
      </p>
    </section>
  );
}
