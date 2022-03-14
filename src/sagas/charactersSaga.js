import { put, takeEvery, call } from 'redux-saga/effects'

import { charactersResponse, charactersResponseFail } from '@/actions'
import { charactersAPI } from '@/api/api'
import { CHARACTERS_REQUEST } from '@/constants'

function * charactersSagaWorker ({ payload }) {
  try {
    const { results, count } = yield call(charactersAPI.getCharacters, payload)
    yield put(charactersResponse({ results, count }))
  } catch (error) {
    yield put(charactersResponseFail(error))
  }
}

export function * charactersWorker () {
  yield takeEvery(CHARACTERS_REQUEST, charactersSagaWorker)
}
