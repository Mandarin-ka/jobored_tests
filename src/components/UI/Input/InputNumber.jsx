import React from 'react';
import cl from './InputNumber.module.css'


function InputNumber({placeholder, value, setValue, dataAttribute}) {

  const increaseSalary = (e) => {
    e.preventDefault();
    setValue(value + 100);
  }

  const decreaseSalary = (e) => {
    e.preventDefault();
    setValue(value > 0 ? value - 100 : 0);
  }


  return (
    <div className={cl.salary}>
      <input
        data-elem={dataAttribute}
        className={cl.input}
        type="number"
        value={value ? value : ''}
        onChange={e=> setValue(+e.target.value)}
        min={0}
        placeholder={placeholder} />
      <button className={cl.step__button} onClick={increaseSalary}>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={cl.step__icon}>
          <path d="M8.50006 4.5L5.39054 1.83469C5.16584 1.6421 4.83428 1.6421 4.60959 1.83469L1.50006 4.5" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      <button className={cl.step__button} onClick={decreaseSalary}>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={cl.step__icon}>
          <path d="M8.50006 4.5L5.39054 1.83469C5.16584 1.6421 4.83428 1.6421 4.60959 1.83469L1.50006 4.5" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
   );
}

export default InputNumber;