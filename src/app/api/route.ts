import axios, { AxiosError } from "axios";
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
const authInstance = axios.create({ baseURL: BASE_URL });

export const register = async ({
  id,
  password,
  nickname,
}: RegisterParams): Promise<RegisterResponse> => {
  try {
    const res = await authInstance.post("/register", {
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
    const res = await authInstance.post<LoginResponse>("/login", {
      id,
      password,
    });
    return res.data;
  } catch (err) {
    return Promise.reject(err as AxiosError);
  }
};

export const check = async () => {};
