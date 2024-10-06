"use client";
import React from "react";
import { ButtonContainer } from "./styles";
import Image from "next/image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: string;
  className?: string;
  variant?: "default" | "outline" | "form";
}

const Button = ({
  title,
  icon,
  className,
  variant = "default",
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer className={className} $variant={variant} {...props}>
      {title}
      {icon && <Image src={icon} alt="" width={26} height={22} />}
    </ButtonContainer>
  );
};

export default Button;
