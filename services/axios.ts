import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const fetchCSRFToken = async () => {
  const response = await instance.get("/sanctum/csrf-cookie");
  return response;
};

export const login = async (data: any) => {
  const response = await instance.post("/api/login", data);
  return response;
};
export const singup = async (data: any) => {
  const response = await instance.post("/api/register", data);
  return response;
};

export const me = async () => {
  const response = await instance.get("/api/me");
  return response;
};

export const logout = async () => {
  const response = await instance.post("/api/logout");
  return response;
};
