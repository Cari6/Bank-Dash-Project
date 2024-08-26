import React from "react";
import Typography from "../typography";
import { styles } from "./styles";
import Icon, { IconName } from "../icon";

interface ItemListProps {
  title: string;
  iconName: IconName;
  isActive?: boolean;
}

const ItemList = ({ title, iconName, isActive }: ItemListProps) => {
  return (
    <div style={styles().itemListContainer}>
      {isActive && (
        <div
          style={{
            position: "absolute",
            width: "6px",
            top: 0,
            bottom: 0,
            left: 0,
            borderRadius: "0 10px 10px 0",
            backgroundColor: "#2D60FF",
          }}
        />
      )}
      <Icon name={iconName} />
      <Typography variant="title2" style={{ marginLeft: 25 }}>
        {title}
      </Typography>
    </div>
  );
};

export default ItemList;
