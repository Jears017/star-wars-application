import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://swapi.dev/api',
})

export const planetsAPI = {
  getPlanets () {
    return instance.get('/planets').then(results => results.data)
  },
}
