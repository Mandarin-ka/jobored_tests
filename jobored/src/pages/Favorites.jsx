import React, {useState} from 'react';
import { useEffect } from 'react';
import VacancyService from '../components/API/VacancyService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import { getStoragedItems } from '../components/utils/localStorageUtils';
import Vacancies from '../components/Vacancies/Vacancies';

const Favorites = () => {
  const [ids, setIds] = useState(getStoragedItems())
  const [page, setPage] = useState(0)
  const [favorites, setFavorites] = useState([]); //can i do it?

  const [fetchFavorites, isFavoritesLoading, favoritesError] = useFetching(async ()=>{
    if(ids.length){
      const response = await VacancyService.getVacancies({ids: ids, page: page})
      setFavorites(response.data.objects)
    }
  })

  useEffect(()=>{
    fetchFavorites();
  },[])

  return (
    <div className='App'>
      <div className="main__favorites">
        {isFavoritesLoading ? <Loader/> : <Vacancies vacancies={favorites}/>}
      </div>
    </div>
   );
}

export default Favorites;