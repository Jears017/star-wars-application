import { put, takeEvery, call } from 'redux-saga/effects'

import { filmsResponse, filmsResponseFail } from '@/actions'
import { filmsAPI } from '@/api/api'
import { FILMS_REQUEST } from '@/constants'

function * filmsSagaWorker () {
  try {
    const films = yield call(filmsAPI.getFilms)
    console.log('Films', films)
    yield put(filmsResponse(films.results))
  } catch (error) {
    yield put(filmsResponseFail(error))
  }
}

export function * filmsWorker () {
  yield takeEvery(FILMS_REQUEST, filmsSagaWorker)
}
