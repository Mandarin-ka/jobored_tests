import React from 'react';
import { useState} from 'react';
import { useFetching } from '../../hooks/useFetching';
import VacancyService from '../../API/VacancyService';
import { useEffect } from 'react';
import cl from './Select.module.css'

function Select({option, setOption}) {
  const [disabled, setDisabled] = useState(true);
  const defaultValue = 'Выберите вакансию';
  const [catalogues, setCatalogues] = useState([]);

  const [fetchCatalogues] = useFetching(async () => {
    const response = await VacancyService.getCatalogues();
    setCatalogues(response.data)
  })

  useEffect(() => {
    fetchCatalogues();
  },[])

  return (
    <div className={cl.select__block}>
      <select className={disabled ? cl.select + ' ' + cl.select_disabled : cl.select} onChange={(e) => {
        setOption(+e.target.value)
        e.target.value !== defaultValue ? setDisabled(false) : setDisabled(true);
      }}>
        <option value={option} className={cl.option_default}>{defaultValue}</option>
        {catalogues.map((catalogue) =>
          <option key={catalogue.key} value={catalogue.key} className={cl.option}>{catalogue.title_trimmed}</option>
        )}
      </select>
    </div>
   );
}

export default Select;