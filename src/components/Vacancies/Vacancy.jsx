import React from 'react';
import { useState } from 'react';
import cl from './Vacancy.module.css';
import { getStoragedItems, removeStoragedItem, setStoragedItem } from '../utils/localStorageUtils';
import { Link } from 'react-router-dom';
import imgLocation from './../img/location.svg'

const Vacancy = ({id, name, salaryFrom, salaryTo, currency, time, location}) => {
  const [isFavorite, setIsFavorite] = useState(getStoragedItems().indexOf(id) > -1);

  const setFavorite = (e) => {
    e.preventDefault();
    if(isFavorite){
      setIsFavorite(false);
      removeStoragedItem(id);
    } else{
      setIsFavorite(true)
      setStoragedItem(id);
    }
  }

  const getSalaryText = (salaryFrom, salaryTo) =>{
    if((salaryFrom && salaryTo) && (salaryFrom === salaryTo)) return `з/п ${salaryFrom} ${currency}`;
    else if(salaryFrom && salaryTo) return `з/п ${salaryFrom} - ${salaryTo} ${currency}`;
    else if(salaryFrom && !salaryTo) return `з/п от ${salaryFrom} ${currency}`;
    else if(!salaryFrom && salaryTo) return `з/п до ${salaryTo} ${currency}`;
    else return `По договорённости`;
  }


  return (
    <Link className={cl.vacancy__item} data-elem={`vacancy-${id}`} to = {`/vacancy/${id}`}>
      <h2 className={cl.vacancy__name}>{name}</h2>
      <div className={cl.vacancy__conditions}>
        <span className={cl.conditions__salary}>
          {getSalaryText(salaryFrom, salaryTo)}
        </span>
        <span className={cl.conditions__time}>{time}</span>
      </div>
      <div className={cl.vacancy__location}>
        <img src={imgLocation} alt="location__icon"  className={cl.location__img}/>
        <span className={cl.location__text}>{location}</span>
      </div>
      <button className={cl.favorite__button} onClick={setFavorite}>
        <svg data-element={`vacancy-${id}-shortlist-button`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ACADB9" className={isFavorite ? cl.star__active : cl.star}>
          <path d="M10.9718 2.70846C11.4382 1.93348 12.5618 1.93348 13.0282 2.70847L15.3586 6.58087C15.5262 6.85928 15.7995 7.05784 16.116 7.13116L20.5191 8.15091C21.4002 8.35499 21.7474 9.42356 21.1545 10.1066L18.1918 13.5196C17.9788 13.765 17.8744 14.0863 17.9025 14.41L18.2932 18.9127C18.3714 19.8138 17.4625 20.4742 16.6296 20.1214L12.4681 18.3583C12.1689 18.2316 11.8311 18.2316 11.5319 18.3583L7.37038 20.1214C6.53754 20.4742 5.62856 19.8138 5.70677 18.9127L6.09754 14.41C6.12563 14.0863 6.02124 13.765 5.80823 13.5196L2.8455 10.1066C2.25257 9.42356 2.59977 8.35499 3.48095 8.15091L7.88397 7.13116C8.20053 7.05784 8.47383 6.85928 8.64138 6.58087L10.9718 2.70846Z" strokeWidth="1.5"/>
        </svg>
      </button>
    </Link>
   );
}

export default Vacancy;