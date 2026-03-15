import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: (import.meta.env.MODE = "development"
    ? "https://localhost:5173/api"
    : "https://light-8bd4.onrender.com/api"),
  withCredentials: true,
});
