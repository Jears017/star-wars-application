import { combineReducers } from 'redux'

import { planetsReducer } from './planets'

export default combineReducers({
  planets: planetsReducer,
})
