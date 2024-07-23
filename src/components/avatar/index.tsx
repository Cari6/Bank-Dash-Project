import { styles } from "./styles";

interface AvatarProps {
  url: string;
  size?: number;
}

const Avatar = ({ url, size = 60 }: AvatarProps) => {
  return (
    <div>
      <img src={url} alt={url} style={styles(size).avatar} />
    </div>
  );
};

export default Avatar;
