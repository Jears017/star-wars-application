import { put, takeEvery, call } from 'redux-saga/effects'

import { GET_PLANETS } from '@/constants'
import { planetsRequest, planetsResponse, planetsResponseFail } from '@/actions'
import { planetsAPI } from '@/api/api'

function * planetsSagaWorker () {
  try {
    yield put(planetsRequest())
    const planets = yield call(planetsAPI.getPlanets)
    yield put(planetsResponse(planets.results))
  } catch (error) {
    yield put(planetsResponseFail(error))
  }
}

export function * planetsWorker () {
  yield takeEvery(GET_PLANETS, planetsSagaWorker)
}
