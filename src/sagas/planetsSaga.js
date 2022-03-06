import { put, takeEvery, call } from 'redux-saga/effects'

import { GET_PLANETS } from '@/constants'
import { setPlanets } from '@/actions'

function receivePlanetsFromApi () {
  return fetch('https://swapi.dev/api/planets')
    .then(results => results)
    .then(planets => planets.json())
    .catch(e => console.log(e))
}

function * planetsSagaWorker () {
  const planets = yield call(receivePlanetsFromApi)
  yield put(setPlanets(planets.results))
}

export function * planetsWorker () {
  yield takeEvery(GET_PLANETS, planetsSagaWorker)
}
