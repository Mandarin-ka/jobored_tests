import React from 'react';
import VacancyItem from './Vacancy';
import cl from './Vacancies.module.css';
import img from './../img/notFound.svg';


function Vacancies({vacancies}) {
  if(!vacancies.length){
    return (
      <div className={cl.error__block}>
        <img src={img} alt="not_found" className={cl.error__img}/>
        <h2 className={cl.error__h}>Упс... Вакансий не найдено :(</h2>
      </div>

    );
  }

  return (
    <div className={cl.vacancy__items}>
      {
        vacancies.map((vacancy) =>
          <VacancyItem
            key = {vacancy.id}
            id = {vacancy.id}
            name = {vacancy.profession}
            salaryFrom = {vacancy.payment_from}
            salaryTo = {vacancy.payment_to}
            currency = {vacancy.currency}
            location = {vacancy.town.title}
            time = {vacancy.type_of_work.title} />
        )
      }


    </div>
  );
}

export default Vacancies;