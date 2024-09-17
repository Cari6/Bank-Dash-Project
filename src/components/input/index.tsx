"use client";
import Image from "next/image";
import { Container, InputContainer, StyledInput } from "./styles";
import Typography from "../typography";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  icon?: string;
  variant?: "default" | "variant1";
  text?: string;
}

const Input = ({
  placeholder,
  icon,
  text,
  variant = "default",
  ...props
}: InputProps) => {
  const isWidthIcon = !!icon;
  return (
    <Container>
      <Typography style={{ marginBottom: 12 }}>{text}</Typography>
      <InputContainer variant={variant} isWidthIcon={isWidthIcon}>
        {icon && <Image src={icon} alt={icon} width={18} height={18} />}
        <StyledInput type="text" placeholder={placeholder} {...props} />
      </InputContainer>
    </Container>
  );
};

export default Input;
