import { put, call, debounce, takeEvery } from 'redux-saga/effects'

import { charactersResponse, charactersResponseFail, charactersDetailsResponse, charactersDetailsResponseFail } from '@/actions'
import { charactersAPI } from '@/api/api'
import { CHARACTERS_REQUEST, SEARCHING_TIME_INTERVAL, CHARACTERS_DETAILS_REQUEST } from '@/constants'

function * loadCharactersDetails ({ payload }) {
  try {
    const charactersDetails = yield call(charactersAPI.getCharactersDetails, payload)
    yield put(charactersDetailsResponse(charactersDetails))
  } catch (error) {
    yield put(charactersDetailsResponseFail(error))
  }
}

function * charactersSagaWorker ({ payload }) {
  try {
    const { results, count } = yield call(charactersAPI.getCharacters, payload.page, payload.search)
    yield put(charactersResponse({ results, count }))
  } catch (error) {
    yield put(charactersResponseFail(error))
  }
}

export function * charactersWorker () {
  yield debounce(SEARCHING_TIME_INTERVAL, CHARACTERS_REQUEST, charactersSagaWorker)
  yield takeEvery(CHARACTERS_DETAILS_REQUEST, loadCharactersDetails)
}
