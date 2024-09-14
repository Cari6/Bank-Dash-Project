"use client";
import React, { useState } from "react";
import { Container, CustomButton, SwitchContainer } from "./styles";
import FormCard from "../../card-form";
import { formPreferences } from "@/src/utils/constants";
import { ButtonContainer } from "../edit-profile/styles";
import Typography from "../../typography";
import Switch from "../../switch";

const Preferences = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };
  return (
    <Container>
      <FormCard itemsForm={formPreferences} />

      <Typography variant="description2">Notification</Typography>
      <SwitchContainer>
        <Switch checked={checked} onChange={handleChange} />
      </SwitchContainer>

      <ButtonContainer>
        <CustomButton title="Save" variant="form" />
      </ButtonContainer>
    </Container>
  );
};

export default Preferences;
