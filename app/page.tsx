import { Avatar, IconButton, Input, Typography } from "@/src/components";
import { LogoIcon } from "@/src/components/icons";

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
    </div>
  );
};

export default Home;
