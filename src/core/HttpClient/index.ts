import axios, { AxiosError, AxiosInstance, CreateAxiosDefaults } from "axios";
import LocalStorage from "../LocalStorage";
import { CONFIG } from "../constants/config";
import { STORAGE_KEYS } from "../constants/local-storage-keys";
import PATHS from "../routes/paths";

type HttpClientOptions = {
  domain?: string;
  auth?: boolean;
};

export class HttpClient {
  client: AxiosInstance;
  options: HttpClientOptions;
  defaults: CreateAxiosDefaults;
  constructor(options?: HttpClientOptions, defaults?: CreateAxiosDefaults) {
    this.options = options || {};
    this.defaults = defaults || {};
    this.client = axios.create({
      ...defaults,
      baseURL: this.createBaseUrl(),
    });

    if (options?.auth) {
      console.log("Fluxo AUTH");
      this.client.interceptors.request.use(async (config) => {
        if (!config.headers.Authorization) {
          const token = await LocalStorage.get(STORAGE_KEYS.ACCESS_TOKEN);
          if (!token) {
            window.location.href = PATHS.LOGOUT;
            throw new Error("Token not exist!");
          }
          config.headers.Authorization = `${token}`;
        }
        return config;
      });

      this.client.interceptors.response.use(
        (response) => response,
        ({ response }: AxiosError) => {
          if (response?.status === 401) {
            window.location.href = PATHS.LOGOUT;
          }
          return Promise.reject(response);
        },
      );
    }
  }

  private createBaseUrl() {
    return `${this.options?.domain || CONFIG.BACK_DOMAIN}${this.defaults?.baseURL || ""}`;
  }

  get get() {
    return this.client.get;
  }

  get post() {
    return this.client.post;
  }

  get put() {
    return this.client.put;
  }

  get patch() {
    return this.client.patch;
  }

  get delete() {
    return this.client.delete;
  }
}
