import { put, takeEvery, call } from 'redux-saga/effects'

import { filmsResponse, filmsResponseFail } from '@/actions'
import { filmsAPI } from '@/api/api'
import { FILMS_REQUEST } from '@/constants'

function * filmsSagaWorker ({ payload }) {
  try {
    const { results, count } = yield call(filmsAPI.getFilms, payload)
    yield put(filmsResponse({ results, count }))
  } catch (error) {
    yield put(filmsResponseFail(error))
  }
}

export function * filmsWorker () {
  yield takeEvery(FILMS_REQUEST, filmsSagaWorker)
}
