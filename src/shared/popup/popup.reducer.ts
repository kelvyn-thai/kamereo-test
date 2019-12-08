import { ACTION_TOGGLE_POPUP } from "./popup.constant";

export interface IReducer {
  toggle: boolean;
  data: any;
}
//TODO: mockup
const initialState: IReducer = {
  toggle: true,
  data: {
    comp: "edit-profile"
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
