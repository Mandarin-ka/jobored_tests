import React from 'react';
import { useState } from 'react';
import './Header.css'
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
      <header id='header' className="header">
        <Link to="/">
          <div className="logo">
            <h1 className="logo__h">Jobored</h1>
          </div>
        </Link>

        <nav className='header__nav'>
          <ul className='nav__ul'>
            <li className='nav__item'><Link to="/" className={!location.pathname.includes('/favorites') ? 'nav__item_a active' : 'nav__item_a'}>Поиск Вакансий</Link></li>
            <li className='nav__item'><Link to="/favorites" className={location.pathname.indexOf('/favorites')>=0 ? 'nav__item_a active' : 'nav__item_a'}>Избранное</Link></li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;