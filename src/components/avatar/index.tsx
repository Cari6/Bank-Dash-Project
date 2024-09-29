"use client";
import Image from "next/image";
import {
  AvatarContainer,
  AvatarImage,
  TextSubtitle,
  TextTitle,
} from "./styles";

export interface AvatarProps {
  url: string;
  size?: number;
  title?: string;
  subtitle?: string;
  className?: string;
}

const Avatar = ({
  url,
  size = 50,
  title,
  subtitle,
  className,
}: AvatarProps) => {
  return (
    <AvatarContainer className={className}>
      <AvatarImage size={size}>
        <Image
          src={url}
          alt={url}
          width={size}
          height={size}
          layout="responsive"
        />
      </AvatarImage>
      <TextTitle>{title}</TextTitle>
      <TextSubtitle>{subtitle}</TextSubtitle>
    </AvatarContainer>
  );
};

export default Avatar;
