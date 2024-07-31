import { StylesProps } from "../../utils/styles-props";

export const styles = (): StylesProps => ({
  sidebarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: 250,
    height: "100%",
    borderRight: " 2px solid #E6EFF5",
    zIndex: 1001,
  },

  logo: {
    marginTop: 30,
  },

  itemListContainer: {
    marginTop: 60,
  },
});
