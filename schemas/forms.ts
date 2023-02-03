import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, "სახელი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან")
    .max(15, "სახელი უნდა შედგებოდეს მაქსიმუმ 15 სიმბოლოსგან")
    .required("სავალდებულო"),
  email: Yup.string().email().required("სავალდებულო"),
  password: Yup.string()
    .min(4, "პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან")
    .max(15, "პაროლი უნდა შედგებოდეს მაქსიმუმ 15 სიმბოლოსგან")
    .required("სავალდებულო"),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().min(3, "მინიმუმ 3 სიმბოლო").required("სავალდებულო"),
  password: Yup.string().required("სავალდებულო"),
});

export const emailValidaion = Yup.object({
  email: Yup.string()
    .min(3, "მინიმუმ 3 სიმბოლო")
    .email("შეიყვანეთ ვალიდური ელ-ფოსტა")
    .required("სავალდებულო"),
});

export const nameValidation = Yup.object({
  email: Yup.string().min(3, "მინიმუმ 3 სიმბოლო").required("სავალდებულო"),
});

export const passwordValidation = Yup.object({
  password: Yup.string()
    .min(4, "მინიმუმ 8 სიმბოლო")
    .max(15, "მაქსიმუმ 15 სიმბოლო")
    .required("სავალდებულო"),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
