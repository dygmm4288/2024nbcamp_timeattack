import OAuthContainer from "@/components/auth/OAuthContainer";
import SignInForm from "@/components/auth/SignInForm";
import Link from "next/link";

export default function SignIn() {
  return (
    <div>
      <SignInForm />
      <Link href='/signup'>회원가입</Link>
      <OAuthContainer />
    </div>
  );
}
