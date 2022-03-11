import { put, takeEvery, call } from 'redux-saga/effects'

import { starshipsResponse, starshipsResponseFail } from '@/actions'
import { starshipsAPI } from '@/api/api'
import { STARSHIPS_REQUEST } from '@/constants'

function * starshipsSagaWorker () {
  try {
    const starships = yield call(starshipsAPI.getStarships)
    yield put(starshipsResponse(starships.results))
  } catch (error) {
    yield put(starshipsResponseFail(error))
  }
}

export function * starshipsWorker () {
  yield takeEvery(STARSHIPS_REQUEST, starshipsSagaWorker)
}
