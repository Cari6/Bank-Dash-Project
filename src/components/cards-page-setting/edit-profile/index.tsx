import React from "react";
import { AvatarContainer, Container, FormContainer } from "./styles";
import Avatar from "../../avatar";
import IconButton from "../../icon-button";
import FormCard from "../../card-form";
import { formSetting } from "@/src/utils/constants";

const EditProfile = () => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar url="/assets/image/avatar.svg" size={130} />

        <IconButton
          url="/assets/image/edit-profile.svg"
          size={30}
          iconSize={30}
          style={{ position: "absolute", right: 0, top: 30 }}
        />
      </AvatarContainer>
      <FormContainer>
        <FormCard itemsForm={formSetting} titleButton="Save" />
      </FormContainer>
    </Container>
  );
};

export default EditProfile;
