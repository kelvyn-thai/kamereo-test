import { ACTION_FETCHED } from "./templates.constant";

export const actionFetched = (payload: object) => ({
  type: ACTION_FETCHED,
  payload
});
