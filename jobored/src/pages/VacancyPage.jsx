import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import VacancyService from '../components/API/VacancyService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import Vacancies from '../components/Vacancies/Vacancies';
import './../styles/VacancyPage.css'
import { useParams } from 'react-router-dom';

function VacancyPage() {
  const [vacancy, setVacancy] = useState([]);
  const [markup, setMarkup] = useState('');
  const params = useParams();

  const [fetchVacancy, isVacancyLoading, vacancyError] = useFetching(async ()=>{
    const response = await VacancyService.getVacancies({ids: [+params.id]});
    setVacancy(response.data.objects)
    setMarkup(response.data.objects[0].vacancyRichText)
  })


  function createMarkup() {
    return {__html: markup};
  }

  useEffect(()=>{
    fetchVacancy();
  }, [])

  return (
    <div className="vacancy">
      {isVacancyLoading ? <Loader/> : <Vacancies vacancies={vacancy} />}
      <div className="description" dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
   );
}

export default VacancyPage;