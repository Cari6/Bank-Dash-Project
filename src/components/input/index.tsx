"use client";
import Image from "next/image";
import { InputContainer, StyledInput } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  icon?: string;
  variant?: "default" | "variant1";
}

const Input = ({
  placeholder,
  icon,
  variant = "default",
  ...props
}: InputProps) => {
  const isWidthIcon = !!icon;
  return (
    <InputContainer variant={variant} isWidthIcon={isWidthIcon}>
      {icon && <Image src={icon} alt={icon} width={18} height={18} />}
      <StyledInput type="text" placeholder={placeholder} {...props} />
    </InputContainer>
  );
};

export default Input;
