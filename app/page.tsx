import { Avatar, IconButton, Input, Typography } from "@/src/components";

const Home = () => {
  return (
    <div>
      <Typography variant="h1">HOME</Typography>
      <Typography variant="title1">HOME</Typography>
      <Typography variant="title2">HOME</Typography>
      <Typography variant="description1">HOME</Typography>
      <Typography variant="description2">HOME</Typography>
      <Typography variant="description3">mandarina</Typography>
      <Input
        placeholder="Search for something"
        icon="/assets/image/search.svg"
      />
      <IconButton url="assets/image/setting.svg" />
      <Avatar url="assets/image/avatar.svg" />
    </div>
  );
};

export default Home;
