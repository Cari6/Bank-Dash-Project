import React from "react";
import { contacts } from "@/src/utils/constants";
import Contacts from "../contacts";
import { ContactContainer, ListContactContainer } from "./styles";
import IconButton from "../../icon-button";

const ListContact = () => {
  return (
    <ListContactContainer>
      <ContactContainer>
        {contacts.map((item, index) => (
          <Contacts
            key={index}
            url={item.url}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </ContactContainer>

      <IconButton
        url="/assets/image/icon-arrow.svg"
        iconSize={20}
        style={{
          backgroundColor: "#fff",
          boxShadow: "4px 4px 18px -2px rgba(231, 228, 232, 0.8)",
        }}
      />
    </ListContactContainer>
  );
};

export default ListContact;
