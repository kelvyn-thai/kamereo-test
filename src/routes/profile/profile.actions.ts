import {
  ACTION_FETCHED,
  ACTION_FETCH_FAIL,
  ACTION_FETCH_PROFILE
} from "./profile.constant";
import { call, put, takeEvery } from "redux-saga/effects";
import { apiGetProfile } from "./profile.services";

export const actionFetched = (payload: object) => ({
  type: ACTION_FETCHED,
  payload
});

export const actionFetchFail = () => ({
  type: ACTION_FETCH_FAIL
});

function* actionFetchProfile() {
  try {
    const { data } = yield call(apiGetProfile);
    if (data.status < 0) {
      throw new Error();
    }
    yield put(actionFetched(data.data));
  } catch (error) {
    yield put(actionFetchFail());
  }
}

function* watchFetchProfile() {
  yield takeEvery(ACTION_FETCH_PROFILE, actionFetchProfile);
}

export default [watchFetchProfile];
