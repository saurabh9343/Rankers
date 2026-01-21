import * as types from "./action";

const defaultUser = {
  uid: "",
  name: "",
  email: "",
  status: "active",
};

// all state
const initialState = {
  loading: false,
  error: null,
  success: false,
  user: defaultUser,
  isLogin: false,
  passwordChanged: false,
};

const allReducer = (state = initialState, action) => {
  switch (action.type) {
    // all default case here
    case types.USER_LOGIN:
    case types.USER_SIGNUP:
    case types.USER_LOAD:
    case types.USER_LOGOUT:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        passwordChanged: false,
      };

    case types.CHANGE_PASSWORD:
      return {
        ...state,
        error: null,
        success: false,
        passwordChanged: false,
      };

    /* =====================
       LOGIN / SIGNUP DONE
    ====================== */
    case "USER_LOGIN_DONE":
    case "USER_SIGNUP_DONE":
      return {
        ...state,
        loading: false,
        success: true,
        isLogin: true,
        user: {
          ...defaultUser,
          ...action.payload,
          status: action.payload.status || "active",
        },
      };

    /* =====================
       LOAD USER FROM STORAGE
    ====================== */
    case "USER_LOAD_DONE":
      return {
        ...state,
        user: {
          ...defaultUser,
          ...action.payload,
        },
        isLogin: true,
      };

    /* =====================
       LOGOUT DONE
    ====================== */
    case "USER_LOGOUT_DONE":
      return {
        ...state,
        user: defaultUser,
        isLogin: false,
        success: false,
        error: null,
      };

    /* =====================
       CHNAGE_PASSWORD
    ====================== */
    case "CHANGE_PASSWORD_DONE":
      return {
        ...state,
        loading: false,
        passwordChanged: true,
      };

    /* =====================
       ERROR
    ====================== */
    case types.USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        isLogin: false,
        user: defaultUser, // 👈 personal data clear
      };

    default:
      return state;
  }
};

export default allReducer;
