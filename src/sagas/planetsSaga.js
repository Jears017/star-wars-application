import { takeEvery } from 'redux-saga/effects'

import { SAY_HELLO } from '@/constants'

function * planetsSagaWorker () {
  yield 'Hello'
}

export function * planetsWorker () {
  yield takeEvery(SAY_HELLO, planetsSagaWorker)
}
