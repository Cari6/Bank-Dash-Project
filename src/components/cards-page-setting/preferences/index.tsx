"use client";
import React from "react";
import { Container, CustomButton } from "./styles";
import FormCard from "../../card-form";
import { formPreferences } from "@/src/utils/constants";
import { ButtonContainer } from "../edit-profile/styles";
import Typography from "../../typography";

const References = () => {
  return (
    <Container>
      <FormCard itemsForm={formPreferences} />
      <Typography variant="description2">Notification</Typography>
      <ButtonContainer>
        <CustomButton title="Save" variant="form" />
      </ButtonContainer>
    </Container>
  );
};

export default References;
