import { StylesProps } from "../../utils/styles-props";

export const defaultStyles = {
  fontFamily: "Inter",
  margin: 0,
};

export const styles: StylesProps = {
  h1: {
    fontSize: "48px",
    fontWeight: 800,
  },
  h2: {
    fontSize: "30px",
    fontWeight: 600,
  },
  h3: {
    fontSize: "24px",
    fontWeight: 600,
  },
  h4: {
    fontSize: "20px",
    fontWeight: 600,
  },
  description: {
    fontSize: "16px",
    fontWeight: 400,
  },
  helpertext: {
    fontSize: "14px",
    fontWeight: 400,
    color: "#64748B",
  },
};

export type Variant = "h1" | "h2" | "h3" | "h4" | "description" | "helpertext";
