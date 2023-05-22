import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VacanciesPage from '../../pages/VacanciesPage';
import FavoritesPage from '../../pages/FavoritesPage';
import VacancyPage from '../../pages/VacancyPage';

const NavRouter = () => {
  return (
    <Routes>
      <Route path = '/' element={<VacanciesPage/>}/>
      <Route path = '/favorites' element={ <FavoritesPage/>}/>
      <Route path = {`/vacancy/:id`} element = {<VacancyPage/>}/>
    </Routes>
   );
}

export default NavRouter;