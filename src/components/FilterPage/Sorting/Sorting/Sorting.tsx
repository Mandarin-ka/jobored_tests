import React from "react";
import cl from "./Sorting.module.css";
import Dropdown from "../../../UI/DropDown/DropDown";

function Sorting({
  sort,
  setSort,
}: {
  sort: string;
  setSort: (elem: string) => void;
}) {
  return (
    <div className={cl.sorting}>
      <span className={cl.text}>сортировать:</span>
      <Dropdown
        option={sort}
        options={["популярные", "Цена: по возрастанию", "Цена: по убыванию"]}
        setOption={setSort}
      />
    </div>
  );
}

export default Sorting;
