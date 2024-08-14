"use client";
import React from "react";
import { ButtonContainer } from "./styles";
import Image from "next/image";
import Typography from "../typography";

interface ButtonProps {
  title: string;
  icon?: string;
  className?: string;
}

const Button = ({ title, icon, className }: ButtonProps) => {
  return (
    <ButtonContainer className={className}>
      <Typography variant="description5">{title}</Typography>
      {icon && <Image src={icon} alt="" width={26} height={22} />}
    </ButtonContainer>
  );
};

export default Button;
