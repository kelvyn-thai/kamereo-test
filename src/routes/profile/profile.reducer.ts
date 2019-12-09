import {
  ACTION_FETCHED,
  ACTION_FETCH_FAIL,
  ACTION_UPDATED_PROFILE,
  ACTION_UPDATE_FAIL_PROFILE
} from "./profile.constant";

interface IReducer {
  isFetching: boolean;
  isFetched: boolean;
  data: any;
}

const initialState: IReducer = {
  isFetching: true,
  isFetched: false,
  data: {}
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: object;
  }
) => {
  switch (action.type) {
    case ACTION_FETCHED: {
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        data: { ...action.payload }
      };
    }
    case ACTION_FETCH_FAIL: {
      return {
        ...state,
        isFetched: false,
        isFetching: false
      };
    }
    case ACTION_UPDATED_PROFILE: {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        }
      };
    }
    case ACTION_UPDATE_FAIL_PROFILE: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
