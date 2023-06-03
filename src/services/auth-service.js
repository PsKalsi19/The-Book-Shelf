import { getAuth } from "./localstorage-service";

export const DEFAULT_HEADERS = () => {
  const auth = getAuth();
  return { headers: { authorization: auth } };
};
