import axios from "axios";
import { getEnvs } from "src/shared/utils";

export const apiGetProfile = () => {
  return axios.get(`${getEnvs().API_DOMAIN}/profile`);
};
