import { SET_USER_INFO } from "../actions";

export const setUserInfo = (userData:IUserInfo) => ({
    type: SET_USER_INFO,
    payload: userData,    
  });