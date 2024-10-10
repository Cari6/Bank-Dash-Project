import React from "react";
import { Button } from "./styles";
import Icon from "../icon";
import { useRouter } from "next/navigation";

const AddCard = () => {
  const router = useRouter();

  const handleClick = () => {
    const query = new URLSearchParams({ focusForm: "true" }).toString();
    router.push(`/credit-cards?${query}`);
  };
  return (
    <Button onClick={handleClick}>
      <Icon name="add" />
    </Button>
  );
};

export default AddCard;
