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
  password: Yup.string()
    .required("Password is required")
    .min(10, "Password must be at least 10 characters")
    .matches(
      /^(?=.*[A-Za-z].{9,})(?=.*\d).*$/,
      "Password must contain at least 9 letters and 1 digit"
    )
    .test(
      "len",
      "Password must be exactly 10 characters",
      (val) => val.length === 10
    ),
});
