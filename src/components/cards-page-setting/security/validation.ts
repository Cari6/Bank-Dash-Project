import * as Yup from "yup";

export const EditProfileValidationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Password is required")
    .min(10, "Password must be at least 10 characters")
    .matches(
      /^(?=.*[A-Za-z].{9,})(?=.*\d).*$/,
      "Password must contain at least 9 letters and 1 digit"
    ),

  newPassword: Yup.string()
    .required("Password is required")
    .min(10, "Password must be at least 10 characters")
    .matches(
      /^(?=.*[A-Za-z].{9,})(?=.*\d).*$/,
      "Password must contain at least 9 letters and 1 digit"
    ),
});
