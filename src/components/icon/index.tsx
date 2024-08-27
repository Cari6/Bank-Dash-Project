import React from "react";
import {
  CardIcon,
  HomeIcon,
  InvestmentIcon,
  LoanIcon,
  ServiceIcon,
  Settingsicon,
  TransferIcon,
  UserIcon,
} from "../icons";
import { IconProps } from "@/src/types/icon-props";

const icons = (props?: IconProps) => ({
  home: <HomeIcon {...props} />,
  transfer: <TransferIcon {...props} />,
  user: <UserIcon {...props} />,
  investment: <InvestmentIcon {...props} />,
  card: <CardIcon {...props} />,
  loan: <LoanIcon {...props} />,
  service: <ServiceIcon {...props} />,
  setting: <Settingsicon {...props} />,
});

export type IconName = keyof ReturnType<typeof icons>;

interface IconComponentProps extends IconProps {
  name: IconName;
  isActive?: boolean;
}

const Icon = ({ name, isActive, ...props }: IconComponentProps) => {
  const color = isActive ? "#2d60ff" : "#b1b1b1";
  const IconComponent = icons({ ...props, color })[name];

  if (!IconComponent) return <></>;

  return <>{IconComponent}</>;
};

export default Icon;
