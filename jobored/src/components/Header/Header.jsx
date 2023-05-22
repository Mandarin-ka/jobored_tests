import React from 'react';
import { useState } from 'react';
import './Header.css'
import { BrowserRouter, Link} from 'react-router-dom';
import NavRouter from '../Router/NavRouter';

const Header = () => {
  const [isMain, setIsMain] = useState(true);

  return (
    <BrowserRouter>
      <header id='header' className="header">
        <Link to="/" onClick={() => setIsMain(true)}>
          <div className="logo">
            <h1 className="logo__h">Jobored</h1>
          </div>
        </Link>

        <nav className='header__nav'>
          <ul className='nav__ul'>
            <li className='nav__item'><Link to="/" className={isMain ? 'nav__item_a active' : 'nav__item_a'} onClick={() => setIsMain(true)}>Поиск Вакансий</Link></li>
            <li className='nav__item'><Link to="/favorites" className={!isMain ? 'nav__item_a active' : 'nav__item_a'} onClick={() => setIsMain(false)}>Избранное</Link></li>
          </ul>
        </nav>
      </header>

        <NavRouter/>
    </BrowserRouter>

  );
}

export default Header;