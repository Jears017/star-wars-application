import { put, debounce, call, takeEvery } from 'redux-saga/effects'

import { filmsResponse, filmsResponseFail, filmsDetailsResponse, filmsDetailsResponseFail } from '@/actions'
import { filmsAPI } from '@/api/api'
import { FILMS_REQUEST, SEARCHING_TIME_INTERVAL, FILMS_DETAILS_REQUEST } from '@/constants'

function * loadFilmsDetails ({ payload }) {
  try {
    const filmsDetails = yield call(filmsAPI.getFilmsDetails, payload)
    yield put(filmsDetailsResponse(filmsDetails))
  } catch (error) {
    yield put(filmsDetailsResponseFail(error))
  }
}

function * filmsSagaWorker ({ payload }) {
  try {
    const { results, count } = yield call(filmsAPI.getFilms, payload.page, payload.search)
    yield put(filmsResponse({ results, count }))
  } catch (error) {
    yield put(filmsResponseFail(error))
  }
}

export function * filmsWorker () {
  yield debounce(SEARCHING_TIME_INTERVAL, FILMS_REQUEST, filmsSagaWorker)
  yield takeEvery(FILMS_DETAILS_REQUEST, loadFilmsDetails)
}
