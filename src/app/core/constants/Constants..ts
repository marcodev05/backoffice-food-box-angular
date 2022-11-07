import { environment } from "src/environments/environment";

export const appConst = {
    PUBLIC_URL : environment.apiBaseUrl + "/public/v1",
    MANAGER_URL: environment.apiBaseUrl + "/manager/v1",
    ADMIN_URL : environment.apiBaseUrl + "/admin/v1"
  };