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

export const addEmail = async (data: any) => {
  const response = await instance.post("/api/email/create", data);
  return response;
};

export const deleteEmail = async (data: any) => {
  const response = await instance.post("/api/email/delete", data);
  return response;
};

export const makePrimary = async (data: any) => {
  const response = await instance.post("/api/email/make-primary", data);
  return response;
};

export const changeUsername = async (data: any) => {
  const response = await instance.post("/api/username/change", data);
  return response;
};

export const changePassword = async (data: any) => {
  const response = await instance.post("/api/password/change", data);
  return response;
};
