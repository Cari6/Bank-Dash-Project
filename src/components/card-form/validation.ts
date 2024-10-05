import * as Yup from "yup";

export const FormCardValidationSchema = Yup.object().shape({
  cardType: Yup.string().required("Card Type is required"),
  nameOnCard: Yup.string()
    .required("Name On Card is required")
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),
  cardNumber: Yup.string()
    .required("Card Number is required")
    .matches(/^[0-9 ]*$/, "Card Number must contain only numbers")
    .transform((value) => value.replace(/\s+/g, ""))
    .length(16, "Card Number must contain exactly 16 digits"),

  expirationDate: Yup.string().required("Expiration Date is required"),
});
