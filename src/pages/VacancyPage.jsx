import React,{ useState, useEffect } from 'react';
import VacancyService from '../components/API/VacancyService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import Vacancies from '../components/Vacancies/Vacancies';
import './../styles/VacancyPage.css'
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

function VacancyPage() {
  const [vacancy, setVacancy] = useState([]);
  const [markup, setMarkup] = useState('');
  const params = useParams();

  const [fetchVacancy, isVacancyLoading] = useFetching(async ()=>{
    const response = await VacancyService.getVacancies({ids: [+params.id]});
    setVacancy(response.data.objects)
    setMarkup(response.data.objects[0].vacancyRichText)
  })

  useEffect(()=>{
    fetchVacancy();
  }, [])

  return (
    <div className="vacancy">
      {isVacancyLoading ? <Loader/> : <Vacancies vacancies={vacancy} />}
      <div className="description">{parse(markup)}</div>
    </div>
   );
}

export default VacancyPage;