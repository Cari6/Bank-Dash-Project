import React from "react";
import Avatar from "../../avatar";
import { AvatarProps } from "../../avatar";
import styled from "styled-components";

const CustomAvatar = styled(Avatar)`
  margin-right: 15px;
  gap: 5px;
`;

const Contacts = ({ url, title, subtitle }: AvatarProps) => {
  return <CustomAvatar url={url} size={65} title={title} subtitle={subtitle} />;
};

export default Contacts;
