import SignInForm from "@/components/auth/signInForm";
import Link from "next/link";

export default function SignIn() {
  return (
    <div>
      <SignInForm />
      <Link href='/signup'>회원가입</Link>
    </div>
  );
}
