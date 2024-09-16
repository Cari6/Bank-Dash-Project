import React, { useState } from "react";
import { ButtonContainer, Container, CustomButton } from "./styles";
import Typography from "../../typography";
import { formSecurity } from "@/src/utils/constants";
import { FormCard, Switch } from "../..";

const Security = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };
  return (
    <Container>
      <Typography variant="description2">Two-factor Authentication</Typography>
      <Switch
        checked={checked}
        onChange={handleChange}
        text="Enable or disable two factor authentication"
      />

      <Typography variant="description2" style={{ marginTop: "30px" }}>
        Change Password
      </Typography>
      <FormCard itemsForm={formSecurity} />

      <ButtonContainer>
        <CustomButton title="Save" variant="form" />
      </ButtonContainer>
    </Container>
  );
};

export default Security;
