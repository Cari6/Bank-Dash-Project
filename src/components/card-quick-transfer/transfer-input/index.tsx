import React from "react";
import Typography from "../../typography";
import {
  CustomButton,
  CustomInput,
  InputButton,
  TransferInputContainer,
} from "./styles";

const TransferInput = () => {
  return (
    <TransferInputContainer>
      <Typography variant="description3" style={{ whiteSpace: "nowrap" }}>
        Write Amount
      </Typography>
      <InputButton>
        <CustomInput />
        <CustomButton title="Send" icon="/assets/image/send.svg" />
      </InputButton>
    </TransferInputContainer>
  );
};

export default TransferInput;
