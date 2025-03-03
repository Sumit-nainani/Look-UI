import { API_STATE, SET_USER_INFO } from '../actions/actions';

const initialState: IUserInfo = {
  userName: '',
  userPhoneNumber: '',
  userGender: '',
  loading: false,
  errors: null,  
};

export const userInfoReducer = (state = initialState, action: IAction) => {
  const { type, payload ={} ,errors={}} = action;
  switch (type) {
    case `${SET_USER_INFO}${API_STATE.inProgress}`:
      return {
        ...state,
        loading:true,
      };
    case `${SET_USER_INFO}${API_STATE.success}`:
      return{
        ...state,
        userName:payload.name,
        userPhoneNumber:payload.phn,
        userGender:payload.gender,
        loading:false,
      }
      case `${SET_USER_INFO}${API_STATE.failed}`:
        return {
          ...state,
          loading:false,
          errors: errors,
        }
    default:
      return state;
  }
};
