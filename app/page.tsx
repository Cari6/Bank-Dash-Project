import { Avatar, IconButton, Input, Typography } from "@/src/components";
import {
  CardIcon,
  EconometricsIcon,
  HomeIcon,
  InvestmentIcon,
  LoanIcon,
  LogoIcon,
  ServiceIcon,
  TransferIcon,
  UserIcon,
} from "@/src/components/icons";
import SettingsIcon from "@/src/components/icons/settings-icon";

const Home = () => {
  return (
    <div>
      <Typography variant="h1">H1</Typography>
      <Typography variant="title1">Title1</Typography>
      <Typography variant="title2">Title2</Typography>
      <Typography variant="description1">Description1</Typography>
      <Typography variant="description2">Description2</Typography>
      <Typography variant="description3">Description3</Typography>
      <div style={{ width: "180px" }}>
        <Input
          placeholder="Search for something"
          icon="/assets/image/search.svg"
        />
      </div>
      <IconButton url="assets/image/setting.svg" size={40} iconSize={20} />
      <Avatar url="assets/image/avatar.svg" />

      <LogoIcon width="150" />
      <HomeIcon />
      <TransferIcon />
      <UserIcon />
      <InvestmentIcon />
      <CardIcon />
      <LoanIcon />
      <ServiceIcon />
      <EconometricsIcon />
      <SettingsIcon />
    </div>
  );
};

export default Home;
