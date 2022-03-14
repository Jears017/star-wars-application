import { put, takeEvery, call } from 'redux-saga/effects'

import { starshipsResponse, starshipsResponseFail } from '@/actions'
import { starshipsAPI } from '@/api/api'
import { STARSHIPS_REQUEST } from '@/constants'

function * starshipsSagaWorker ({ payload }) {
  try {
    const { results, count } = yield call(starshipsAPI.getStarships, payload)
    yield put(starshipsResponse({ results, count }))
  } catch (error) {
    yield put(starshipsResponseFail(error))
  }
}

export function * starshipsWorker () {
  yield takeEvery(STARSHIPS_REQUEST, starshipsSagaWorker)
}
