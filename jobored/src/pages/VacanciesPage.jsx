import React, {useState, useEffect} from 'react';
import VacancyService from '../components/API/VacancyService';
import FilterForm from '../components/Filter/FilterForm';
import Search from '../components/Filter/Search';
import Header from '../components/Header/Header';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import Pagination from '../components/UI/Pagination/Pagination';
import Vacancies from '../components/Vacancies/Vacancies';
import '../styles/Main.css'


function VacanciesPage() {
  const [vacancies, setVacancies] = useState([]);
  const [totalVacancies, setTotalVacancies] = useState(0);
  const [requestData, setRequestData] = useState({keyword: '', page: 0, paymentFrom: null, paymentTo: null, noAgreement: null, catalogues: null});


  const [fetchVacancies, isVacanciesLoading, vacanciesError] = useFetching(async () => {
    const response = await VacancyService.getVacancies(requestData);
    setVacancies(response.data.objects);
    setTotalVacancies(response.data.total);
  })

  useEffect(() => {
    fetchVacancies();
  }, [requestData])


  return (
    <div className="main__app">
      <Search requestData={requestData} setRequestData={setRequestData}/>
      <FilterForm request={requestData} setRequest={setRequestData}/>
      {isVacanciesLoading ? <Loader/> : <Vacancies vacancies={vacancies}/>}
      <Pagination totalVacancies={totalVacancies} requestData={requestData} setRequest={setRequestData}/>
    </div>
  );
}

export default VacanciesPage;
