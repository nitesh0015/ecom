

import { 
  loginFailure,
  loginStart, 
  loginSuccess,
  registerStart,
  registerFailure,
  registerSuccess, } from "./userRedux";
import { publicRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
  // localStorage.setItem("isLoggedIn",true);

  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);

    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};
