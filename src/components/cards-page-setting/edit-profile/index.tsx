import React from "react";
import {
  AvatarContainer,
  AvatarContainerMobile,
  ButtonContainer,
  Container,
  ContainerTop,
  CustomButton,
  FormContainer,
} from "./styles";
import Avatar from "../../avatar";
import IconButton from "../../icon-button";
import FormCard from "../../card-form";
import { formEditProfile } from "@/src/utils/constants";
import Button from "../../button";

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

        <FormContainer>
          <FormCard itemsForm={formEditProfile} />
        </FormContainer>
      </ContainerTop>
      <ButtonContainer>
        <CustomButton title="Save" variant="form" />
      </ButtonContainer>
    </Container>
  );
};

export default EditProfile;
