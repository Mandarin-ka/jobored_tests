import React from 'react';
import { getPagesArray } from '../../utils/pages';
import cl from './Pagination.module.css'

function Pagination({totalVacancies, requestData, setRequest}) {
  const pagesArray = getPagesArray(requestData.page, totalVacancies);
  return (
    <div className={cl.page__wrapper}>
      <button
        onClick={() => setRequest({...requestData, page: requestData.page - 1})}
        disabled={!requestData.page}
        className={cl.page}
        >&lt;</button>
      {pagesArray.map((page, i) =>
        <button
          key={i}
          onClick={(e) => {
            e.preventDefault();
            setRequest({...requestData, page: page-1});
          }}
          className={page === requestData.page + 1 ? cl.page + ' ' + cl.page__current : cl.page}
        >{page}</button>
      )}
      <button
        onClick={() => setRequest({...requestData, page: requestData.page+1})}
        disabled={requestData.page+1 === Math.ceil(totalVacancies/4) || !totalVacancies}
        className={cl.page}
        >&gt;</button>
    </div>
   );
}

export default Pagination;