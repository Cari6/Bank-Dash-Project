import React from "react";
import { Cards, CustomIconButton, ModalContent, ModalOverlay } from "./styles";
import CreditCard from "../credit-card";
import { useCards } from "@/src/contexts/data-formCard/provider";

interface ModalCreditCardsProps {
  onClose: () => void;
  onDelete?: boolean;
}

const ModalCreditCards = ({ onClose, onDelete }: ModalCreditCardsProps) => {
  const { cards, deleteCard } = useCards();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <Cards>
          {cards.map((card, index) => (
            <CreditCard
              key={index}
              variant={index % 2 === 0 ? "variant1" : "variant2"}
              balance="$5,756"
              cardHolder={card.nameOnCard}
              validThru={card.expirationDate}
              cardNumber={card.cardNumber}
              showDeleteButton={onDelete}
              onDelete={() => deleteCard(card.id)}
            />
          ))}
        </Cards>
        <CustomIconButton
          url="assets/image/delete.svg"
          onClick={onClose}
        ></CustomIconButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalCreditCards;
