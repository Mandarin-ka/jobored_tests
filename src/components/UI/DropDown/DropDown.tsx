import React, { useState } from "react";
import cl from "./DropDown.module.css";

const Dropdown = ({
  option,
  options,
  setOption,
}: {
  option: string;
  options: string[];
  setOption: (elem: string) => void;
}) => {
  const defaultValue = options[0];
  const [isActive, setIsActive] = useState(false);

  const optionState = () => {
    let result = cl.dropdown__button;
    if (option) {
      result += " " + cl.active;
    }
    if (isActive) {
      result += " " + cl.opened;
    }

    return result;
  };

  return (
    <div className={cl.dropdown} data-elem="industry-select">
      <div
        className={optionState()}
        onClick={() => {
          setIsActive(!isActive);
        }}>
        {option ? options.find(e => e === option) : defaultValue}
      </div>
      {isActive && (
        <div className={cl.dropdown__content}>
          {options.map((elem, i) => (
            <div
              key={i}
              onClick={() => {
                setOption(elem);
                setIsActive(false);
              }}
              className={
                elem === option
                  ? cl.dropdown__item + " " + cl.active
                  : cl.dropdown__item
              }>
              {elem}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
