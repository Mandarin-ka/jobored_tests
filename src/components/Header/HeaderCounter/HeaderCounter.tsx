import React from "react";
import basket from "./../../../assets/icons/basket.svg";
import cl from "./HeaderCounter.module.css";

function HeaderCounter({ count }: { count: number }) {
  return (
    <div className={cl.header__counter}>
      <div className={cl.counter__ui}>
        <img src={basket} alt="" className={cl.counter__img} />
        <span className={cl.counter__name}>корзина</span>
      </div>
      <div className={cl.counter}>{count}</div>
    </div>
  );
}

export default HeaderCounter;
