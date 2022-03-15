import { put, debounce, call } from 'redux-saga/effects'

import { starshipsResponse, starshipsResponseFail } from '@/actions'
import { starshipsAPI } from '@/api/api'
import { STARSHIPS_REQUEST, SEARCHING_TIME_INTERVAL } from '@/constants'

function * starshipsSagaWorker ({ payload }) {
  try {
    const { results, count } = yield call(starshipsAPI.getStarships, payload.page, payload.search)
    yield put(starshipsResponse({ results, count }))
  } catch (error) {
    yield put(starshipsResponseFail(error))
  }
}

export function * starshipsWorker () {
  yield debounce(SEARCHING_TIME_INTERVAL, STARSHIPS_REQUEST, starshipsSagaWorker)
}
