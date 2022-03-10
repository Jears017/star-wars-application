import { all } from 'redux-saga/effects'

import { planetsWorker } from './planetsSaga'
import { charactersWorker } from './charactersSaga'
import { starshipsWorker } from './starshipsSaga'

export default function * rootSaga () {
  yield all([planetsWorker(), charactersWorker(), starshipsWorker()])
}
