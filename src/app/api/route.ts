import axios, { AxiosError } from "axios";
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
type LoginParams = {
  id: string;
  password: string;
};
type LoginResponse = {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: string;
  nickname: string;
};

export const register = async ({
  id,
  password,
  nickname,
}: RegisterParams): Promise<RegisterResponse> => {
  try {
    const res = await axios.post(path.join(BASE_URL, "/register"), {
      id,
      password,
      nickname,
    });
    return res.data;
  } catch (err) {
    return Promise.reject(err as AxiosError);
  }
};

export const login = async ({
  id,
  password,
}: LoginParams): Promise<LoginResponse> => {
  try {
    const res = await axios.post(path.join(BASE_URL, "/login"), {
      id,
      password,
    });
    return res.data;
  } catch (err) {
    return Promise.reject(err as AxiosError);
  }
};
