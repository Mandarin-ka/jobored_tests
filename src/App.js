import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VacancyService from './components/API/VacancyService';
import Header from './components/Header/Header';
import { useFetching } from './components/hooks/useFetching';
import VacanciesPage from './pages/VacanciesPage';
import FavoritesPage from './pages/FavoritesPage'
import VacancyPage from './pages/VacancyPage'


function App() {

  const [fetchToken] = useFetching(async () =>{
    const response = await VacancyService.getToken();
    localStorage.setItem('token', response.data.access_token)
  })

  useEffect(()=>{
    fetchToken();
  },[])


  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = '/' element={<VacanciesPage/>}/>
          <Route path = '/favorites' element={ <FavoritesPage/>}/>
          <Route path = {`/vacancy/:id`} element = {<VacancyPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
