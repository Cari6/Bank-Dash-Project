import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";
import { styles } from "./styles";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url: string;
  size?: number;
  iconSize?: number;
}

const IconButton = ({
  url,
  size = 50,
  iconSize = 25,
  style,
  ...props
}: IconButtonProps) => {
  const iconButtonStyles = styles(size);
  return (
    <button {...props} style={{ ...iconButtonStyles.iconButton, ...style }}>
      <Image src={url} alt={url} width={iconSize} height={iconSize} />
    </button>
  );
};

export default IconButton;
