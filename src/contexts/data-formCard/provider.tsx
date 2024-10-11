"use client";
import { useContext, useEffect, useState } from "react";
import { Card, CardsContext } from "./context";

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cards, setCards] = useState<Card[]>([]);

  const addCard = (newCard: Card) => {
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem("cardData", JSON.stringify(updatedCards));
  };

  const deleteCard = (id: string) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
    localStorage.setItem("cardData", JSON.stringify(updatedCards));
  };

  useEffect(() => {
    const storedCards = localStorage.getItem("cardData");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

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
