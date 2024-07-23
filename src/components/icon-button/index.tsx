import Image from "next/image";
import { styles } from "./styles";

interface IconButtonProps {
  url: string;
  size?: number;
  iconSize?: number;
}

const IconButton = ({ url, size = 50, iconSize = 25 }: IconButtonProps) => {
  const iconButtonStyles = styles(size);
  return (
    <button style={iconButtonStyles.iconButton}>
      <Image src={url} alt={url} width={iconSize} height={iconSize} />
    </button>
  );
};

export default IconButton;
