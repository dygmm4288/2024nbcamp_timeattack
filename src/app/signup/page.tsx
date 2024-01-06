import SignUpForm from "@/components/auth/SignUpForm";
import Link from "next/link";

export default function SignUp() {
  return (
    <section>
      <h2>회원가입</h2>
      <SignUpForm />
      <div>
        <div>카카오로 3초만에 시작하기</div>
        <div>구글로 시작하기</div>
        <div>apple로 시작하기</div>
      </div>
      <button>이메일 주소로 시작하기</button>
      <Link href='/signin'>로그인</Link>
    </section>
  );
}
