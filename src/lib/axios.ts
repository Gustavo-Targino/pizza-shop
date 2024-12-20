import { env } from "@/env";
import axios from "axios";

const BASE_URL = env.VITE_API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // faz com que os cookies do front-end sejam enviados automaticamente ao back-end
});

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise(
      (resolve) => setTimeout(resolve, Math.round(Math.random() * 3000)), // Número aleatório de delay entre 1 e 3 segundos.
    );

    return config;
  });
}
