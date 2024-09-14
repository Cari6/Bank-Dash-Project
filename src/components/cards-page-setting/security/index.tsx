import React from "react";
import {
  ButtonContainer,
  Container,
  ContainerBottom,
  ContainerTop,
  CustomButton,
} from "./styles";
import Typography from "../../typography";
import FormCard from "../../card-form";
import { formSecurity } from "@/src/utils/constants";
import Button from "../../button";

const Security = () => {
  return (
    <Container>
      <ContainerTop>
        <Typography variant="description2">
          Two-factor Authentication
        </Typography>
      </ContainerTop>
      <ContainerBottom>
        <Typography variant="description2">Change Password</Typography>
        <FormCard itemsForm={formSecurity} />
      </ContainerBottom>
      <ButtonContainer>
        <CustomButton title="Save" variant="form" />
      </ButtonContainer>
    </Container>
  );
};

export default Security;
