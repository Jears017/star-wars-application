import { put, call, takeEvery, debounce } from 'redux-saga/effects'

import { planetsResponse, planetsResponseFail, planetsDetailsResponse, planetsDetailsResponseFail } from '@/actions'
import { planetsAPI } from '@/api/api'
import { PLANETS_REQUEST, SEARCHING_TIME_INTERVAL, PLANETS_DETAILS_REQUEST } from '@/constants'

function * loadPlanetsDetails ({ payload }) {
  try {
    const planetDetails = yield call(planetsAPI.getPlanetsDetails, payload)
    yield put(planetsDetailsResponse(planetDetails))
  } catch (error) {
    yield put(planetsDetailsResponseFail(error))
  }
}

function * planetsSagaWorker ({ payload }) {
  try {
    const { results, count } = yield call(
      planetsAPI.getPlanets,
      payload.page,
      payload.search,
    )
    yield put(planetsResponse({ results, count }))
  } catch (error) {
    yield put(planetsResponseFail(error))
  }
}

export function * planetsWorker () {
  yield debounce(SEARCHING_TIME_INTERVAL, PLANETS_REQUEST, planetsSagaWorker)
  yield takeEvery(PLANETS_DETAILS_REQUEST, loadPlanetsDetails)
}
