import { all } from 'redux-saga/effects'

import { planetsWorker } from './planetsSaga'
import { charactersWorker } from './charactersSaga'

export default function * rootSaga () {
  yield all([planetsWorker(), charactersWorker()])
}
