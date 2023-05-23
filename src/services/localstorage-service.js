const AUTH_TOKEN = "auth_token";
const USER = "user";

export const setAuth = (token) => localStorage.setItem(AUTH_TOKEN, token);

export const setUser= (user)=>localStorage.setItem(USER,JSON.stringify(user))

export const getAuth = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const getUser=()=>{
    return JSON.parse(localStorage.getItem(USER))?? {}
}

export const HandlelocalStorageLogOut = () => {
    localStorage.removeItem(AUTH_TOKEN)
    localStorage.removeItem(USER)
};