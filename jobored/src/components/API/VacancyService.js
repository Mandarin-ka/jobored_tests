import axios from 'axios'

export default class VacancyService{
  static async getVacancies({published = 1 , keyword, paymentFrom, paymentTo,  noAgreement, catalogues, count = 4, page = 0, ids}){
    const response = await axios.get('https://startup-summer-proxy-production.up.railway.app/2.0/vacancies', {
      headers : {
        'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
      },
      params : {
        published: published,
        keyword: keyword,
        payment_from: paymentFrom ,
        payment_to: paymentTo,
        catalogues: catalogues,
        count: count,
        page: page,
        no_agreement: noAgreement,
        ids: ids
      }
    })

    return response;
  }

  static async getCatalogues(){
    const response = axios.get('https://startup-summer-2023-proxy.onrender.com/2.0/catalogues', {
      headers: {
        'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
      }
    })

    return response;
  }
}