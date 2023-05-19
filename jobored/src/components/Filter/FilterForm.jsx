import React, { useState } from 'react';
import Select from '../UI/Select/Select';
import InputNumber from '../UI/Input/InputNumber';
import cl from './FilterForm.module.css'

const FilterForm = () => {
  const [salaryFrom, setSalaryFrom] = useState(0);
  const [salaryTo, setSalaryTo] = useState(null);
  const [option, setOption] = useState(0);

  const reset = () => {
    setSalaryFrom(0);
    setSalaryTo(null);
    setOption(0);
  }

  return (
    <form action="" className={cl.filter__form}>
      <div className={cl.form__header}>
        <h2 className={cl.form__name}>Фильтры</h2>
        <span className={cl.clear} onClick={reset}>Сбросить все</span>
      </div>

      <div className={cl.filter__option}>
        <h3 className={cl.option__name}>Отрасль</h3>
        <Select option={option} setOption={setOption}/>
      </div>
      <div className={cl.filter__option}>
        <h3 className={cl.option__name}>Оклад</h3>
        <InputNumber placeholder='От' value={salaryFrom} setValue={setSalaryFrom}/>
        <InputNumber placeholder='До' value={salaryTo} setValue={setSalaryTo}/>
      </div>

      <button className={cl.button__apply}>Применить</button>
    </form>
   );
}

export default FilterForm;