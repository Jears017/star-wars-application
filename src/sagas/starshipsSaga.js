import { put, takeEvery, call } from 'redux-saga/effects'

import { starshipsRequest, starshipsResponse, starshipsResponseFail } from '@/actions'
import { starshipsAPI } from '@/api/api'
import { STARSHIPS_REQUEST } from '@/constants'

function * starshipsSagaWorker () {
  try {
    const starships = yield call(starshipsAPI.getStarships)
    console.log(starships)
    yield put(starshipsResponse(starships.results))
  } catch (error) {
    yield put(starshipsResponseFail(error))
  }
}

export function * starshipsWorker () {
  yield takeEvery(STARSHIPS_REQUEST, starshipsSagaWorker)
}
