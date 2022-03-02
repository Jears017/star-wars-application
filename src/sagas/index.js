import { all } from "redux-saga/effects";
import { planetsWorker } from "./planetsSaga";

export default function* rootSaga() {
  yield all([planetsWorker()]);
}
