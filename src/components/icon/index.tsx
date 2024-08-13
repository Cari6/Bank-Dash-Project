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
}

const Icon = ({ name, ...props }: IconComponentProps) => {
  const IconComponent = icons(props)[name];

  if (!IconComponent) return <></>;

  return IconComponent;
};

export default Icon;
