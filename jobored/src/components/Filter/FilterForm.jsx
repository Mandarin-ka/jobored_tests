import React, { useState } from 'react';
import './FilterForm.css';
import Select from '../UI/Select/Select';
import InputNumber from '../UI/Input/InputNumber';

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
    <form action="" className='filter__form'>
      <div className="form__header">
        <h2 className="form__name">Фильтры</h2>
        <span className="clear" onClick={reset}>Сбросить все</span>
      </div>

      <div className="filter__option">
        <h3 className="option__name">Отрасль</h3>
        <Select option={option} setOption={setOption}/>
      </div>
      <div className="filter__option">
        <h3 className="option__name">Оклад</h3>
        <InputNumber placeholder='От' value={salaryFrom} setValue={setSalaryFrom}/>
        <InputNumber placeholder='До' value={salaryTo} setValue={setSalaryTo}/>
      </div>

      <button className="button__apply">Применить</button>
    </form>
   );
}

export default FilterForm;