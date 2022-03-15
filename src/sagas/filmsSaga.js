import { put, debounce, call } from 'redux-saga/effects'

import { filmsResponse, filmsResponseFail } from '@/actions'
import { filmsAPI } from '@/api/api'
import { FILMS_REQUEST, SEARCHING_TIME_INTERVAL } from '@/constants'

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
}
