import React from 'react';
import { useState } from 'react';
import cl from './Vacancy.module.css';
import { removeStoragedItem, setStoragedItem } from '../utils/localStorageUtils';

const Vacancy = ({id, name, salaryFrom, salaryTo, currency, time, location}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const setFavorite = () => {
    if(isFavorite){
      setIsFavorite(false);
      removeStoragedItem(id);
    } else{
      setIsFavorite(true)
      setStoragedItem(id);
    }
  }

  return (
    <div className={cl.vacancy__item} data-elem={`vacancy-${id}`}>
      <h2 className={cl.vacancy__name}>{name}</h2>
      <div className={cl.vacancy__conditions}>
        <span className={cl.conditions__salary}>
          {salaryFrom && salaryTo
            ? `з/п ${salaryFrom} - ${salaryTo} ${currency}`

            : salaryFrom && !salaryTo
            ? `з/п от ${salaryFrom} ${currency}`

            : !salaryFrom && salaryTo
            ? `з/п до ${salaryTo} ${currency}`
            : `По договорённости`}
        </span>
        <span className={cl.conditions__time}>{time}</span>
      </div>
      <div className={cl.vacancy__location}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cl.location__img}>
          <path d="M14.714 13.8807C13.9335 14.6612 12.3013 16.2935 11.1781 17.4166C10.5273 18.0675 9.47304 18.0678 8.82217 17.4169C7.7186 16.3134 6.11797 14.7127 5.28593 13.8807C2.68244 11.2772 2.68244 7.05612 5.28593 4.45262C7.88943 1.84913 12.1105 1.84913 14.714 4.45262C17.3175 7.05612 17.3175 11.2772 14.714 13.8807Z" stroke="#ACADB9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.5 9.16667C12.5 10.5474 11.3807 11.6667 9.99998 11.6667C8.61927 11.6667 7.49998 10.5474 7.49998 9.16667C7.49998 7.78595 8.61927 6.66667 9.99998 6.66667C11.3807 6.66667 12.5 7.78595 12.5 9.16667Z" stroke="#ACADB9" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="location__text">{location}</span>
      </div>
      <button className="favorite__but"></button>
      <svg data-element={`vacancy-${id}-shortlist-button`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ACADB9" className={isFavorite ? cl.star__active : cl.star} onClick={setFavorite}>
        <path d="M10.9718 2.70846C11.4382 1.93348 12.5618 1.93348 13.0282 2.70847L15.3586 6.58087C15.5262 6.85928 15.7995 7.05784 16.116 7.13116L20.5191 8.15091C21.4002 8.35499 21.7474 9.42356 21.1545 10.1066L18.1918 13.5196C17.9788 13.765 17.8744 14.0863 17.9025 14.41L18.2932 18.9127C18.3714 19.8138 17.4625 20.4742 16.6296 20.1214L12.4681 18.3583C12.1689 18.2316 11.8311 18.2316 11.5319 18.3583L7.37038 20.1214C6.53754 20.4742 5.62856 19.8138 5.70677 18.9127L6.09754 14.41C6.12563 14.0863 6.02124 13.765 5.80823 13.5196L2.8455 10.1066C2.25257 9.42356 2.59977 8.35499 3.48095 8.15091L7.88397 7.13116C8.20053 7.05784 8.47383 6.85928 8.64138 6.58087L10.9718 2.70846Z" strokeWidth="1.5"/>
      </svg>
    </div>
   );
}

export default Vacancy;