"use client";
import React from "react";
import { ButtonContainer } from "./styles";
import Image from "next/image";

interface ButtonProps {
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
}: ButtonProps) => {
  return (
    <ButtonContainer className={className} variant={variant}>
      {title}
      {icon && <Image src={icon} alt="" width={26} height={22} />}
    </ButtonContainer>
  );
};

export default Button;
