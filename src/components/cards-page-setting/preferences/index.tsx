"use client";
import React, { useState } from "react";
import {
  ButtonContainer,
  Container,
  CustomButton,
  InputContainer,
} from "./styles";
import { switchPreferences } from "@/src/utils/constants";
import Typography from "../../typography";
import Switch from "../../switch";
import Input from "../../input";

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
      <InputContainer>
        <Input variant="variant1" placeholder="USD" text="Currency" />
        <Input
          variant="variant1"
          placeholder="(GMT-12:00) International Date Line West"
          text="Time Zone"
        />
      </InputContainer>
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
