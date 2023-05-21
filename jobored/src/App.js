import React from 'react';
import VacanciesPage from './pages/VacanciesPage';
import Header from './components/Header/Header';
import Favorites from './pages/Favorites';


function App() {

  return (
    <div className="app">
      <Header/>
      <Favorites/>
    </div>
  );
}

export default App;
