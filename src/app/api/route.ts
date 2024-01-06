import path from "path";
const BASE_URL = "https://moneyfulpublicpolicy.co.kr";
type RegisterParams = {
  id: string;
  password: string;
  nickname: string;
};
type RegisterResponse = {
  message: string;
  success: boolean;
};
export const register = async ({
  id,
  password,
  nickname,
}: RegisterParams): Promise<RegisterResponse> => {
  try {
    const res = await fetch(path.join(BASE_URL, "register"), {
      method: "POST",
      body: JSON.stringify({ id, password, nickname }),
    });
    return res.json();
  } catch (err) {
    return Promise.reject(err);
  }
};
