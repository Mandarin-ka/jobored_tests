import React from 'react';
import { useState } from 'react';
import './Header.css'

const Header = (isMain) => {

  return (
  <header id='header' className="header">
    <div className="logo">
      <h1 className="logo__h">Jobored</h1>
    </div>
    <nav className='header__nav'>
      <ul className='nav__ul'>
        <li className='nav__item'><a href="#header" className={isMain ? 'nav__item_a active' : 'nav__item_a'}>Поиск Вакансий</a></li>
        <li className='nav__item'><a href="#header" className={!isMain ? 'nav__item_a active' : 'nav__item_a'}>Избранное</a></li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;