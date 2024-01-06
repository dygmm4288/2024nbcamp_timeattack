import OAuthContainer from "@/components/auth/OAuthContainer";
import SignUpForm from "@/components/auth/SignUpForm";
import Link from "next/link";

export default function SignUp() {
  return (
    <section>
      <h2>회원가입</h2>
      <SignUpForm />
      <OAuthContainer />
      <button>이메일 주소로 시작하기</button>
      <Link href='/signin'>로그인</Link>
    </section>
  );
}
