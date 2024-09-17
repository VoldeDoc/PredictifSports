import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true, // Include cookies in requests
});

export const isAxiosError = axios.isAxiosError;

export default api;