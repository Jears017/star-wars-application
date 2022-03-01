import { takeEvery } from "redux-saga/effects";

function* planetsSagaWorker() {
  yield "Hello";
}

export function* planetsWorker() {
  yield takeEvery("SAY_HELLO", planetsSagaWorker);
}
