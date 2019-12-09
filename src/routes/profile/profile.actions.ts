import {
  ACTION_FETCHED,
  ACTION_FETCH_FAIL,
  ACTION_FETCH_PROFILE,
  ACTION_UPDATE_PROFILE,
  ACTION_UPDATE_FAIL_PROFILE,
  ACTION_UPDATED_PROFILE,
  ACTION_UDPATE_AVATAR
} from "./profile.constant";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  apiGetProfile,
  apiUpdateProfile,
  apiUpdateAvatar
} from "./profile.services";

export const actionFetched = (payload: any) => ({
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

export const actionUpdatedProfile = (payload: any) => ({
  type: ACTION_UPDATED_PROFILE,
  payload
});

export const actionUpdateFailProfile = () => ({
  type: ACTION_UPDATE_FAIL_PROFILE
});

function* actionUpdateProfile(action: any) {
  try {
    console.log('action', action.payload)
    const { data } = yield call(apiUpdateProfile, action.payload);
    if (data.status < 0) {
      throw new Error();
    }
    yield put(actionUpdatedProfile(data.data));
  } catch (error) {
    yield put(actionUpdateFailProfile());
  }
}

function* actionUpdateAvatar(action: any) {
  try {
    const { data } = yield call(apiUpdateAvatar, action.payload);
    if (data.status < 0) {
      throw new Error();
    }
    yield put(actionUpdatedProfile(data.data));
  } catch (error) {
    yield put(actionUpdateFailProfile());
  }
}

function* watchFetchProfile() {
  yield takeEvery(ACTION_FETCH_PROFILE, actionFetchProfile);
}

function* watchUpdateProfile() {
  yield takeEvery(ACTION_UPDATE_PROFILE, actionUpdateProfile);
}

function* watchUpdateAvatar() {
  yield takeEvery(ACTION_UDPATE_AVATAR, actionUpdateAvatar);
}

export default [watchFetchProfile, watchUpdateProfile, watchUpdateAvatar];
