import React from "react";
import { HomeIcon, UserIcon } from "../icons";
import { IconProps } from "@/src/types/icon-props";

const icons = (props?: IconProps) => ({
  home: <HomeIcon {...props} />,
  user: <UserIcon {...props} />,
});

export type IconName = keyof ReturnType<typeof icons>;

interface IconComponentProps extends IconProps {
  name: IconName;
}

const Icon = ({ name, ...props }: IconComponentProps) => {
  const IconComponent = icons(props)[name];

  if (!IconComponent) return null;

  return IconComponent;
};

export default Icon;
