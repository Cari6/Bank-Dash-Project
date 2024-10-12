import { createContext } from "react";

export interface Card {
  id: string;
  cardType: string;
  nameOnCard: string;
  cardNumber: string;
  expirationDate: string;
}

interface CardsContextProps {
  cards: Card[];
  addCard: (card: Card) => void;
  deleteCard: (cardNumber: string) => void;
}

export const CardsContext = createContext<CardsContextProps | undefined>(
  undefined
);
