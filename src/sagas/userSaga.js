import { put, call, takeEvery } from 'redux-saga/effects'

import { userResponse, userResponseFail } from '@/actions'
import { userAPI } from '@/api/api'
import { USER_SIGN_UP_REQUEST, USER_LOG_IN_REQUEST } from '@/constants'

function * userRegisterSagaWorker ({ payload }) {
  try {
    yield call(userAPI.registerUser, payload.email, payload.password)
  } catch (error) {
    yield put(userResponseFail(error))
  }
}

function * userLogInSagaWorker ({ payload }) {
  try {
    const { email, uid, accessToken } = yield call(
      userAPI.signInUser,
      payload.email,
      payload.password,
    )
    yield put(userResponse({ email: email, id: uid, token: accessToken }))
  } catch (error) {
    yield put(userResponseFail(error))
  }
}

export function * userWatcher () {
  yield takeEvery(USER_SIGN_UP_REQUEST, userRegisterSagaWorker)
  yield takeEvery(USER_LOG_IN_REQUEST, userLogInSagaWorker)
}
