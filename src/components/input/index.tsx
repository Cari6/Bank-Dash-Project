"use client";
import Image from "next/image";
import { Container, InputContainer, StyledInput } from "./styles";
import Typography from "../typography";
import Icon from "../icon";
import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  icon?: string;
  variant?: "default" | "variant1";
  text?: string;
  errorMessage?: string;
  isPassword?: boolean;
}

const Input = ({
  placeholder,
  icon,
  text,
  variant = "default",
  errorMessage,
  isPassword = false,
  ...props
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isWidthIcon = !!icon || isPassword;

  return (
    <Container>
      <Typography style={{ margin: 0 }}>{text}</Typography>
      <InputContainer variant={variant} isWidthIcon={isWidthIcon}>
        {icon && <Image src={icon} alt={icon} width={18} height={18} />}
        <StyledInput
          type={isPassword && !isPasswordVisible ? "password" : "text"}
          placeholder={placeholder}
          {...props}
        />
        {isPassword && (
          <div
            style={{
              position: "absolute",
              right: 15,
              bottom: 9,
              cursor: "pointer",
            }}
            onClick={() => setIsPasswordVisible((presState) => !presState)}
          >
            {isPasswordVisible ? (
              <Icon name="closeEye" />
            ) : (
              <Icon name="openEye" />
            )}
          </div>
        )}
      </InputContainer>
      {errorMessage && (
        <Typography error style={{ marginTop: 8 }}>
          {errorMessage}
        </Typography>
      )}
    </Container>
  );
};

export default Input;
