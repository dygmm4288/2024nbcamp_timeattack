export function checkValidEmail(email: string) {
  return email.includes("@");
}
export function checkValidNickname(nickname: string) {
  return nickname.length > 2;
}
export function checkValidPassword(password: string) {
  return password.length > 7;
}
export function checkValidPasswordConfirm(
  password: string,
  passwordConfirm: string,
) {
  return password === passwordConfirm;
}

export const ERROR_MESSAGE = {
  EMAIL: "이메일 형식이 올바르지 않습니다.",
  PASSWORD: "비밀번호는 8자 이상이어야 합니다.",
  PASSWORD_CONFIRM: "비밀번호가 일치하지 않습니다.",
  NICKNAME: "닉네임은 2자 이상이어야 합니다.",
};
