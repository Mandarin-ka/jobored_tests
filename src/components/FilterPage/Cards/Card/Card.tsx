import React, { useState } from "react";
import cl from "./Card.module.css";
import icon from "./../../../../assets/icons/card_add.svg";
import {
  addFlower,
  hasFlower,
  removeFlower,
} from "../../../../utils/localStorage";
import { IFlower } from "../../../../API/IFlowers";
import Button from "../../../UI/Button/Button";

function Card({ card, setCount }: { card: IFlower; setCount: () => void }) {
  const [isFavorite, setIsFavorite] = useState(hasFlower(card));

  function updateFlower() {
    if (isFavorite) {
      removeFlower(card);
      setIsFavorite(false);
      setCount();
    } else {
      addFlower(card);
      setIsFavorite(true);
      setCount();
    }
  }

  return (
    <div className={cl.card}>
      <img src={card.thumbnail} alt="img" className={cl.card__img} />
      <h2 className={cl.card__name}>{card.title}</h2>
      <h2 className={cl.card__price}>${card.price.toFixed(2)}</h2>
      <button className={cl.card__play}></button>
      <Button
        onClick={updateFlower}
        className={isFavorite ? cl.card__added : cl.card__add}>
        <img src={icon} alt="" />
        <span className={cl.add__text}>
          {isFavorite ? "добавлено" : "добавить"}
        </span>
      </Button>
    </div>
  );
}

export default Card;
