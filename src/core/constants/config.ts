import { getEnv } from "../utils/getEnvs";

export const CONFIG = {
  BACK_DOMAIN: getEnv("EXPO_PUBLIC_BACKEND_URL"),
};
