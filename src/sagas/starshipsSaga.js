import { put, debounce, call, takeEvery } from 'redux-saga/effects'

import { starshipsResponse, starshipsResponseFail, starshipsDetailsResponse, starshipsDetailsResponseFail } from '@/actions'
import { starshipsAPI } from '@/api/api'
import { STARSHIPS_REQUEST, SEARCHING_TIME_INTERVAL, STARSHIPS_DETAILS_REQUEST } from '@/constants'

function * loadStarshipsDetails ({ payload }) {
  try {
    const starshipsDetails = yield call(starshipsAPI.getStarshipsDetails, payload)
    yield put(starshipsDetailsResponse(starshipsDetails))
  } catch (error) {
    yield put(starshipsDetailsResponseFail(error))
  }
}

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
  yield takeEvery(STARSHIPS_DETAILS_REQUEST, loadStarshipsDetails)
}
