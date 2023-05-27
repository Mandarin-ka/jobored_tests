import React, { useState } from 'react';
import cl from './Search.module.css';
import img from './../img/search.svg';

function Search({requestData, setRequestData}) {
  const [value, setValue] = useState('');

  return (
    <form action="" className={cl.search__form}>
      <img src={img} alt='search' className={cl.search__img}/>
      <input data-elem='search-input' type="text" placeholder='Введите название вакансии' value={value} className={cl.search__input} maxLength={75} onChange={(e) => setValue(e.target.value)}/>
      <button data-elem='search-button' className={cl.search__button} onClick={(e) => {
        e.preventDefault();
        setRequestData({...requestData, keyword: value, page: 0});
      }}>Поиск</button>
    </form>
  );
}

export default Search;