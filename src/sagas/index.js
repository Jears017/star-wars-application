import { all } from 'redux-saga/effects'

import { planetsWorker } from './planetsSaga'
import { charactersWorker } from './charactersSaga'
import { starshipsWorker } from './starshipsSaga'
import { filmsWorker } from './filmsSaga'
import { userWatcher } from './userSaga'

export default function * rootSaga () {
  yield all([planetsWorker(), charactersWorker(), starshipsWorker(), filmsWorker(), userWatcher()])
}
