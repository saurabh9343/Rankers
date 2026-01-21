import { all } from "redux-saga/effects";
import saga from "./reaction/saga";

export default function* rootSaga() {
  yield all([saga()]);
};
