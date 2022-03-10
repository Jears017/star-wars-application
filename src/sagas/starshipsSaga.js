import { put, takeEvery, call } from 'redux-saga/effects'

import { starshipsRequest, starshipsResponse, starshipsResponseFail } from '@/actions'
import { starshipsAPI } from '@/api/api'

function * starshipsSagaWorker () {
  try {
    const starships = yield call(starshipsAPI.getCharacters)
    yield put(starshipsResponse(starships.results))
  } catch (error) {
    yield put(starshipsResponseFail(error))
  }
}

export function * starshipsWorker () {
  yield takeEvery(starshipsRequest, starshipsSagaWorker)
}
