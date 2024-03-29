import axios from "axios";
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

const postAxios = async <T, D>(url: string, data: T): Promise<D> => {
  try {
    const res = await authInstance.post(url, data);
    return res.data;
  } catch (err) {
    return Promise.reject(err);
  }
};
export const register = (data: RegisterParams) =>
  postAxios<RegisterParams, RegisterResponse>("/register", data);

export const login = (data: LoginParams) =>
  postAxios<LoginParams, LoginResponse>("/login", data);

export const check = async () => {};
