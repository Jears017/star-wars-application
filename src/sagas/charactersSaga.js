import { put, takeEvery, call } from 'redux-saga/effects'

import { charactersResponse, charactersResponseFail } from '@/actions'
import { charactersAPI } from '@/api/api'
import { CHARACTERS_REQUEST } from '@/constants'

function * charactersSagaWorker () {
  try {
    const characters = yield call(charactersAPI.getCharacters)
    yield put(charactersResponse(characters.results))
  } catch (error) {
    yield put(charactersResponseFail(error))
  }
}

export function * charactersWorker () {
  yield takeEvery(CHARACTERS_REQUEST, charactersSagaWorker)
}
