import profileSagas from "src/routes/profile/profile.actions";
import {
  all
  // fork
} from "redux-saga/effects";

function* rootSaga() {
  yield all([...profileSagas.map((saga: any) => saga())]);
}

export default rootSaga;
