import React from "react";
import Card from "./Card/Card";
import cl from "./Cards.module.css";
import { IFlower } from "../../../API/IFlowers";

function Cards({
  cards,
  setCount,
}: {
  cards: IFlower[];
  setCount: () => void;
}) {
  return (
    <div className={cl.cards}>
      {cards.map(e => (
        <Card key={e.id} card={e} setCount={setCount} />
      ))}
    </div>
  );
}

export default Cards;
