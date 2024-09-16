"use client";
import React, { useState } from "react";
import { Container, CustomButton } from "./styles";
import FormCard from "../../card-form";
import { formPreferences, switchPreferences } from "@/src/utils/constants";
import { ButtonContainer } from "../edit-profile/styles";
import Typography from "../../typography";
import Switch from "../../switch";

const Preferences = () => {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(switchPreferences.length).fill(false)
  );

  const handleChange = (index: number) => (nextChecked: boolean) => {
    const updatedSwitches = [...checked];
    updatedSwitches[index] = nextChecked;
    setChecked(updatedSwitches);
  };
  return (
    <Container>
      <FormCard itemsForm={formPreferences} />

      <Typography variant="description2" style={{ margin: "20px 0" }}>
        Notification
      </Typography>

      {switchPreferences.map((option, index) => (
        <Switch
          key={option.id}
          checked={checked[index]}
          onChange={handleChange(index)}
          text={option.text}
        />
      ))}

      <ButtonContainer>
        <CustomButton title="Save" variant="form" />
      </ButtonContainer>
    </Container>
  );
};

export default Preferences;
