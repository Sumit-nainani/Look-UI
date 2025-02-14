import { SET_USER_INFO } from "../actions/actions";

const initialState:IUserInfo={
    userName: '',
    userPhoneNumber: '',
}

export const userInfoReducer = (state = initialState, action:IAction)=>{
   const {type,payload} = action;
   switch(type){
    case SET_USER_INFO:
        return{
            ...state,
            ...payload,
        }
        default:
            return state
   }
}