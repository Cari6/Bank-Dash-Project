import React from "react";
import Avatar from "../../avatar";
import { AvatarProps } from "../../avatar";
import styled from "styled-components";

const CustomAvatar = styled(Avatar)`
  margin-right: 30px;
  @media (max-width: 475px) {
    margin-right: 20px;
  }
`;

const Contacts = ({ url, title, subtitle }: AvatarProps) => {
  return <CustomAvatar url={url} size={70} title={title} subtitle={subtitle} />;
};

export default Contacts;
