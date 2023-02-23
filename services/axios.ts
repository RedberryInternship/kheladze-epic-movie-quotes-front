import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const multipartInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
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

export const uploadUserImage = async (data: any) => {
  const response = await multipartInstance.post("/api/upload/image", data);
  return response;
};

export const getGenres = async () => {
  const response = await instance.get("/api/genres");
  return response;
};

export const createMovie = async (data: any) => {
  const response = await multipartInstance.post("/api/movie/create", data);
  return response;
};

export const editMovie = async (data: any) => {
  const response = await multipartInstance.post("/api/movie/update", data);
  return response;
};

export const deleteMovie = async (data: any) => {
  const response = await instance.post("/api/movie/delete", data);
  return response;
};

export const getMovies = async () => {
  const response = await instance.get("/api/movie");
  return response;
};

export const createQuote = async (data: any) => {
  const response = await multipartInstance.post("/api/quote/create", data);
  return response;
};

export const editQuote = async (data: any) => {
  const response = await multipartInstance.post("/api/quote/update", data);
  return response;
};

export const deleteQuote = async (data: any) => {
  const response = await instance.post("/api/quote/delete", data);
  return response;
};

export const getQuotes = async (query: string) => {
  const response = await instance.get(query);
  return response;
};

export const addComment = async (data: any) => {
  const response = await multipartInstance.post("/api/comment/add", data);
  return response;
};

export const addLike = async (data: any) => {
  const response = await multipartInstance.post("/api/like/add", data);
  return response;
};

export const unLike = async (data: any) => {
  const response = await instance.post("/api/like/remove", data);
  return response;
};

export const googleLogin = async (data: any) => {
  const response = await instance.post("/api/google-login", data);
  return response;
};

export const markAsRead = async () => {
  const response = await instance.post("/api/notification");
  return response;
};

export const readNotification = async (data: any) => {
  const response = await instance.post("/api/notification/read", data);
  return response;
};
