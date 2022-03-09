import * as axios from 'axios'

import { SWAPI_URL, PLANETS_PAGE_PATH } from '@/constants'

const instance = axios.create({
  baseURL: SWAPI_URL,
})

export const planetsAPI = {
  getPlanets () {
    return instance.get(PLANETS_PAGE_PATH).then(results => results.data)
  },
}
