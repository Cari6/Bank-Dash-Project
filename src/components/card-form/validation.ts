import * as Yup from "yup";

export const FormCardValidationSchema = Yup.object().shape({
  cardType: Yup.string().required("Card Type is required"),
  nameOnCard: Yup.string().required("Name On Card is required"),
  cardNumber: Yup.string().required("Card Number is required"),
  expirationDate: Yup.string().required("Expiration Date is required"),
});
