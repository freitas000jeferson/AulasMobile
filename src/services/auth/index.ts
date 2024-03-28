import { HttpClient } from "../../core/HttpClient";
import LocalStorage from "../../core/LocalStorage";
import { STORAGE_KEYS } from "../../core/constants/local-storage-keys";
import { User } from "../../core/domain/user";

const client = new HttpClient({}, { baseURL: "/auth" });

export type Login = {
  email: string;
  password: string;
};
interface LoginDto {
  accessToken: string;
  user: User;
}

export const LoginService = async ({ email, password }: Login): Promise<LoginDto | undefined> => {
  const response = await client.post<LoginDto>("", {
    email,
    password,
  });

  if (response.status >= 200 && response.status < 300) {
    await LocalStorage.set(STORAGE_KEYS.ACCESS_TOKEN, response.data.accessToken);
    await LocalStorage.set(STORAGE_KEYS.USER_ID, response.data.user.id);
    return response.data;
  }
  console.log("Error", response.status);
  return undefined;
};
