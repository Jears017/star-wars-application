import { combineReducers } from 'redux'

import planetsReducer from './planets'
import charactersReducer from './characters'
import starshipsReducer from './starships'
import filmsReducer from './films'

export default combineReducers({
  planets: planetsReducer,
  characters: charactersReducer,
  starships: starshipsReducer,
  films: filmsReducer,
})
