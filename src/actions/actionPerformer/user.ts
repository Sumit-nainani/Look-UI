import { SET_USER_INFO } from '../actions';
import { apiCreator } from './api';

export const getUserRegistered = (params,extraParams) => async (dispatch) => {
  return apiCreator(dispatch, {
      action: SET_USER_INFO,
      url: '/register',
      params: params,
      retry: true,
      extraParams:extraParams
  });
};

export const getUserLogin = (params,extraParams) => async (dispatch) => {
  return apiCreator(dispatch, {
      action: SET_USER_INFO,
      url: '/login',
      params: params,
      retry: true,
      extraParams:extraParams
  });
};

export const userVerifyOTP = (params,extraParams) => async (dispatch) => {
  return apiCreator(dispatch, {
    action: '',
    url: '/verifyotp',
    params: params,
    retry: true,
    extraParams:extraParams
});
}


