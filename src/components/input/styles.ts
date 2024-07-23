import { StylesProps } from "../../utils/styles-props";

export const styles = (): StylesProps => ({
  inputContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "40px",
    padding: "0px 20px 0px 20px",
    backgroundColor: "#F5F7FA",
    borderRadius: "25px",
    transition: " box-shadow 0.3s",
  },
  input: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    minWidth: 0,
    flex: 1,
    marginLeft: "10px",
  },
});
