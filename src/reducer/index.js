import { combineReducers } from 'redux'

import planetsReducer from './planets'
import charactersReducer from './characters'
import starshipsReducer from './starships'

export default combineReducers({
  planets: planetsReducer,
  characters: charactersReducer,
  starships: starshipsReducer,
})
