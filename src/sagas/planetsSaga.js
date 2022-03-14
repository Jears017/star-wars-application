import { put, takeEvery, call, debounce } from 'redux-saga/effects'

import { planetsResponse, planetsResponseFail } from '@/actions'
import { planetsAPI } from '@/api/api'
import { PLANETS_REQUEST } from '@/constants'

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
  yield debounce(500, PLANETS_REQUEST, planetsSagaWorker)
}
