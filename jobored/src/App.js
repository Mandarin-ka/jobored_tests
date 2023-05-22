import React, { useEffect } from 'react';
import VacancyService from './components/API/VacancyService';
import Header from './components/Header/Header';
import { useFetching } from './components/hooks/useFetching';


function App() {

  const [fetchToken] = useFetching(async () =>{
    const response = await VacancyService.getToken();
    localStorage.setItem('token', response.data.access_token)
  })

  useEffect(()=>{
    fetchToken();
  },[])


  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
