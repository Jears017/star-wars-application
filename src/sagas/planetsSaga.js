import { put, takeEvery, call } from 'redux-saga/effects'

import { planetsRequest, planetsResponse, planetsResponseFail } from '@/actions'
import { planetsAPI } from '@/api/api'
import { PLANETS_REQUEST } from '@/constants'

function * planetsSagaWorker () {
  try {
    const planets = yield call(planetsAPI.getPlanets)
    yield put(planetsResponse(planets.results))
  } catch (error) {
    yield put(planetsResponseFail(error))
  }
}

export function * planetsWorker () {
  yield takeEvery(PLANETS_REQUEST, planetsSagaWorker)
}
