import { useAppSelector } from "@/modules/hooks/hook";

export default function useAuth() {
  const {accessToken} = useAppSelector((state) => state.auth);
  
  return {isLogin: !!accessToken}
}