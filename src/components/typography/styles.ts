import { StylesProps } from "../../utils/styles-props";

export const styles: StylesProps = {
  h1: {
    fontSize: "28px",
    fontWeight: 600,
    color: "#343C6A",
    backgroundColor: "red",
  },
  title1: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#343C6A",
  },
  title2: {
    fontSize: "18px",
    fontWeight: 500,
    color: "#B1B1B1",
  },
  description1: {
    fontSize: "16px",
    fontWeight: 400,
    color: "#232323",
  },
  description2: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#232323",
  },
  description3: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#718EBF",
  },
};

export type Variant =
  | "h1"
  | "title1"
  | "title2"
  | "description1"
  | "description2"
  | "description3";
