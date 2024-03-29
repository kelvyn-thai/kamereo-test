import { ACTION_TOGGLE_POPUP } from "./popup.constant";

export interface IReducer {
  toggle: boolean;
  data: any;
}
const initialState: IReducer = {
  toggle: false,
  data: {
    comp: ""
  }
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case ACTION_TOGGLE_POPUP: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};
