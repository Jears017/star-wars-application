import { put, call, debounce } from 'redux-saga/effects'

import { charactersResponse, charactersResponseFail } from '@/actions'
import { charactersAPI } from '@/api/api'
import { CHARACTERS_REQUEST, SEARCHING_TIME_INTERVAL } from '@/constants'

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
}
