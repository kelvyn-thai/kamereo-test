import { ACTION_TOGGLE_POPUP } from "./popup.constant";

export const actionTogglePopup = (payload: { toggle: boolean; data: any }) => ({
  type: ACTION_TOGGLE_POPUP,
  payload
});
