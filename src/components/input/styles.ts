import { StylesProps } from "../../utils/styles-props";

export const styles = (): StylesProps => ({
  inputContainer: {
    position: "relative",
  },

  input: {
    width: "150px",
    height: "50px",
    padding: "0px 10px 0px 60px",
    backgroundColor: "#F5F7FA",
    borderRadius: "25px 25px 25px 25px",
    border: "none",
    outline: "none",
    transition: " box-shadow 0.3s",
  },
  icon: {
    position: "absolute",
    left: "25px",
    top: "55%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },

  img: {
    width: 20,
    height: 20,
  },
});
