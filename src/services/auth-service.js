import { getAuth } from "./localstorage-service";

export const DEFAULT_HEADERS = {
  headers: { authorization: getAuth() },
};
