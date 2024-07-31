import React from "react";
import { HomeIcon, TransferIcon } from "../icons";
import Typography from "../typography";
import { styles } from "./styles";

interface ItemListProps {
  item: string;
}

const ItemList = ({ item }: ItemListProps) => {
  return (
    <div style={styles().itemListContainer}>
      <HomeIcon />
      <Typography variant="title2" style={{ marginLeft: 15 }}>
        {item}
      </Typography>
    </div>
  );
};

export default ItemList;