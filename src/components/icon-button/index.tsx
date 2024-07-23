import { styles } from "./styles";

interface IconButtonProps {
  url: string;
  size?: number;
  iconSize?: number;
}

const IconButton = ({ url, size = 50, iconSize = 25 }: IconButtonProps) => {
  const iconButtonStyles = styles(size, iconSize);
  return (
    <div>
      <button style={iconButtonStyles.iconButton}>
        <img src={url} alt={url} style={iconButtonStyles.icon} />
      </button>
    </div>
  );
};

export default IconButton;
