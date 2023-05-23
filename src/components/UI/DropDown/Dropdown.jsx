import React from 'react';
import { useState} from 'react';
import { useFetching } from '../../hooks/useFetching';
import VacancyService from '../../API/VacancyService';
import { useEffect } from 'react';
import cl from './Dropdown.module.css'

const Dropdown = ({option, setOption}) => {
  const [catalogues, setCatalogues] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const [fetchCatalogues] = useFetching(async () => {
    const response = await VacancyService.getCatalogues();
    setCatalogues(response.data)
  })

  const optionState = () => {
    let result = cl.dropdown__button;
    if(option){
      result += ' ' + cl.active;
    }
    if(isActive){
      result += ' ' + cl.opened;
    }

    return result
  }

  useEffect(() => {
    fetchCatalogues();
  },[])


  return (
    <div className={cl.dropdown} data-elem='industry-select'>
      <div className={optionState()} onClick={() => {
        setIsActive(!isActive)
      }}>{option ? catalogues.find((catalogue) => catalogue.key === option).title_trimmed : 'Выберите отрасль'}</div>
      {isActive &&
        <div className={cl.dropdown__content}>
          {
            catalogues.map((catalogue) =>
              <div key={catalogue.key} onClick={(e) => {
                setOption(catalogue.key);
                setIsActive(false);
              }} className={catalogue.key=== option ? cl.dropdown__item + ' ' + cl.active : cl.dropdown__item}>{catalogue.title_trimmed}</div>
            )
          }
        </div>
      }

    </div>
   );
}

export default Dropdown;