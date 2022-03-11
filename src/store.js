import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '@/reducer/index'
import rootSaga from '@/sagas'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()

let store = null

const createDevelopmentStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
}

const createProductionStore = () => {
  return createStore(rootReducer, applyMiddleware(sagaMiddleware))
}

export const getStore = () => {
  if (!store) {
    store =
      process.env.NODE_ENV === 'development'
        ? createDevelopmentStore()
        : createProductionStore
    sagaMiddleware.run(rootSaga)
  }
  return store
}
