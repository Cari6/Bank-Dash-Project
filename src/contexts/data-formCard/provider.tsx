"use client";
import { v4 as uuidv4 } from "uuid";

import { useContext, useEffect, useState } from "react";
import { Card, CardsContext } from "./context";

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const storedCards = localStorage.getItem("cardData");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  const addCard = (card: Omit<Card, "id">) => {
    const newCard = { ...card, id: uuidv4() };
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem("cardData", JSON.stringify(updatedCards));
  };

  const deleteCard = (id: string) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
    localStorage.setItem("cardData", JSON.stringify(updatedCards));
  };

  return (
    <CardsContext.Provider value={{ cards, addCard, deleteCard }}>
      {children}
    </CardsContext.Provider>
  );
};

export const useCards = () => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCards must be used within a CardsProvider");
  }
  return context;
};
