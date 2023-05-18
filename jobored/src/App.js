import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import VacancyService from './components/API/VacancyService';
import Header from './components/Header/Header';
import { useFetching } from './components/hooks/useFetching';
import Vacancies from './components/Vacancies/Vacancies';
import './styles/Main.css'


function App() {
  const [vacancies, setVacancies] = useState([]);
  const [totalVacancies, setTotalVacancies] = useState(0);


  const [fetchVacancies, isVacanciesLoading, vacanciesError] = useFetching(async () => {
    const response = await VacancyService.getVacancies({keyword: '', page: 1, paymentFrom: null, paymentTo: null, noAgreement: null, catalogues: null});
    setVacancies(response.data.objects);
    setTotalVacancies(response.data.total);

  })

  console.log(vacancies)


  useEffect(() => {
    fetchVacancies();
  }, [])



  return (
    <div className="main__app">
      <Header/>
      <Vacancies vacancies={vacancies}/>
    </div>
  );
}

export default App;
