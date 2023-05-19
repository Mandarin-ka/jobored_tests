import React from 'react';
import { useState} from 'react';
import { useFetching } from '../../hooks/useFetching';
import VacancyService from '../../API/VacancyService';
import { useEffect } from 'react';
import cl from './Select.module.css'

function Select({option, setOption}) {
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
      <select className={!option ? cl.select + ' ' + cl.select_disabled : cl.select} value={option} onChange={(e) => {
        setOption(+e.target.value)
      }}>
        <option value={0} className={cl.option_default}>Выберите отрасль</option>
        {catalogues.map((catalogue) =>
          <option key={catalogue.key} value={catalogue.key} className={cl.option}>{catalogue.title_trimmed}</option>
        )}
      </select>
    </div>
   );
}

export default Select;