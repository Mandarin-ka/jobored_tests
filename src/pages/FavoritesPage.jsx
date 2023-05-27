import React, {useState} from 'react';
import { useEffect } from 'react';
import VacancyService from '../components/API/VacancyService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import Pagination from '../components/UI/Pagination/Pagination';
import { getStoragedItems } from '../components/utils/localStorageUtils';
import Vacancies from '../components/Vacancies/Vacancies';

const FavoritesPage = () => {
  const [requestData, setRequestData] = useState({page: 0, ids: getStoragedItems()})
  const [favorites, setFavorites] = useState([]); //can i do it?

  const [fetchFavorites, isFavoritesLoading] = useFetching(async ()=>{
    if(requestData.ids.length){
      const response = await VacancyService.getVacancies(requestData)
      setFavorites(response.data.objects)
    }
  })

  useEffect(()=>{
    fetchFavorites();
  },[requestData])
  return (
    <div className="main__favorites">
      {isFavoritesLoading ? <Loader/> : <Vacancies vacancies={favorites}/>}
      <Pagination requestData={requestData} setRequest={setRequestData} totalVacancies={requestData.ids.length}/>
    </div>
   );
}

export default FavoritesPage;