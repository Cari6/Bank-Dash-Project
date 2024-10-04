import * as Yup from "yup";

export const EditProfileValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters"),

  userName: Yup.string()
    .required("User Name is required")
    .max(15, "Name must be at most 15 characters"),

  email: Yup.string()
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email is not valid"),

  date: Yup.string().required("Date is required"),

  address: Yup.string()
    .required("Address is required")
    .max(50, "Name must be at most 50 characters"),

  city: Yup.string()
    .required("City is required")
    .max(20, "Name must be at most 20 characters"),

  avatarUrl: Yup.string(),
});
