import axios from "axios";
import { getEnvs } from "src/shared/utils";

export const apiGetProfile = () => axios.get(`${getEnvs().API_DOMAIN}/profile`);
export const apiUpdateProfile = (payload: any) =>
  axios.post(`${getEnvs().API_DOMAIN}/profile`, payload);
export const apiUpdateAvatar = (payload: any) =>
  axios.put(`${getEnvs().API_DOMAIN}/profile/update-avatar`, payload, {
    headers: {
      "content-type": "multipart/form-data"
    }
  });
