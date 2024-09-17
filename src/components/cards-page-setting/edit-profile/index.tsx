import React from "react";
import {
  AvatarContainer,
  AvatarContainerMobile,
  Container,
  ContainerTop,
} from "./styles";
import Avatar from "../../avatar";
import IconButton from "../../icon-button";
import EditProfileForm from "./form";

const EditProfile = () => {
  return (
    <Container>
      <ContainerTop>
        <AvatarContainer>
          <Avatar url="/assets/image/avatar.svg" size={130} />
          <IconButton
            url="/assets/image/edit-profile.svg"
            size={30}
            iconSize={30}
            style={{ position: "absolute", right: 0, bottom: 25 }}
          />
        </AvatarContainer>

        <AvatarContainerMobile>
          <Avatar url="/assets/image/avatar.svg" size={170} />
          <IconButton
            url="/assets/image/edit-profile.svg"
            size={40}
            iconSize={40}
            style={{ position: "absolute", right: 0, bottom: 30 }}
          />
        </AvatarContainerMobile>
        <EditProfileForm />
      </ContainerTop>
    </Container>
  );
};

export default EditProfile;
