import { getAuth } from "./localStorage-service";

export const DEFAULT_HEADERS = {
  headers: { authorization: getAuth() },
};
