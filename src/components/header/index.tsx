import React from "react";
import { styles } from "./styles";
import Typography from "../typography";
import Input from "../input";
import IconButton from "../icon-button";
import Avatar from "../avatar";

const Header = () => {
  return (
    <div style={styles().headerContainer}>
      <div style={styles().titleContainer}>
        <Typography variant="h1">Overview</Typography>
      </div>
      <div style={styles().containerRigth}>
        <Input
          placeholder="Search for something"
          icon="/assets/image/search.svg"
        />
        <IconButton url="/assets/image/setting-header.svg" />
        <IconButton url="/assets/image/notification.svg" />
        <Avatar url="/assets/image/avatar.svg" />
      </div>
    </div>
  );
};

export default Header;
