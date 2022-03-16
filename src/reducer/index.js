import { combineReducers } from 'redux'

import planetsReducer from './planets'
import charactersReducer from './characters'
import starshipsReducer from './starships'
import filmsReducer from './films'
import planetsDetailsReducer from './planetsDetails'
import charactersDetailsReducer from './charactersDetails'

export default combineReducers({
  planets: planetsReducer,
  characters: charactersReducer,
  starships: starshipsReducer,
  films: filmsReducer,
  planetsDetails: planetsDetailsReducer,
  charactersDetails: charactersDetailsReducer,
})
