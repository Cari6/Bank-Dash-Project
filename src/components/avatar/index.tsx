import Image from "next/image";
import { styles } from "./styles";

interface AvatarProps {
  url: string;
  size?: number;
}

const Avatar = ({ url, size = 50 }: AvatarProps) => {
  return (
    <Image
      src={url}
      alt={url}
      width={size}
      height={size}
      style={styles().avatar}
    />
  );
};

export default Avatar;
