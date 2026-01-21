export const USER_LOGIN = "USER_LOGIN";
export const USER_SIGNUP = "USER_SIGNUP";
export const USER_LOAD = "USER_LOAD";
export const USER_LOGOUT = "USER_LOGOUT";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const USER_ERROR = "USER_ERROR";

export const UserLogin = (email, password, navigate) => ({
  type: USER_LOGIN,
  payload: { email, password, navigate },
});

export const UserSignup = (data) => ({
  type: USER_SIGNUP,
  payload: data,
});

export const userLogout = (navigate) => ({
  type: USER_LOGOUT,
  payload: { navigate },
});

export const UserError = (message) => ({
  type: USER_ERROR,
  payload: message,
});

export const changePassword = (data) => ({
  type: CHANGE_PASSWORD,
  payload: data,
});
