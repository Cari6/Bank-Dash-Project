import React from "react";
import { Button } from "./styles";
import Icon from "../icon";
import { useRouter } from "next/navigation";
import Typography from "../typography";

const AddCard = () => {
  const router = useRouter();

  const handleClick = () => {
    const query = new URLSearchParams({ focusForm: "true" }).toString();
    router.push(`/credit-cards?${query}`);
  };
  return (
    <Button onClick={handleClick}>
      <Icon name="add" />
      <Typography variant="title2">Add Card</Typography>
    </Button>
  );
};

export default AddCard;
