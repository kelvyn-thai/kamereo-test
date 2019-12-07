import { combineReducers } from "redux";
import popup from "src/shared/popup/popup.reducer";
import configs from "src/configs/configs.reducer";
import profile from "src/routes/profile/profile.reducer";

export default combineReducers({
  popup,
  configs,
  profile
});
