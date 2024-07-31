import React from "react";
import Typography from "../typography";
import { styles } from "./styles";
import Icon, { IconName } from "../icon";

interface ItemListProps {
  title: string;
  iconName: IconName;
}

const ItemList = ({ title, iconName }: ItemListProps) => {
  return (
    <div style={styles().itemListContainer}>
      <Icon name={iconName} />
      <Typography variant="title2" style={{ marginLeft: 25 }}>
        {title}
      </Typography>
    </div>
  );
};

export default ItemList;
