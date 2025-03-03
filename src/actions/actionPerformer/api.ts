import axios from 'axios';
import Toast from 'react-native-toast-message';
import { API_URL } from '../../constants/common';
import { ToastMessagesText } from '../../constants/text';
import { API_STATE } from '../actions';
import { HttpStatusCode } from '../../constants/text';

const apiInprogress = (action: string) => ({
  type: `${action}${API_STATE.inProgress}`,
});

const apiSuccess = (action: string, payload) => ({
  type: `${action}${API_STATE.success}`,
  payload,
});

const apiFailed = (action: string, errors) => ({
  type: `${action}${API_STATE.failed}`,
  errors,
});

export const apiCreator = async (dispatch, options) => {
  const { params = {}, action = '', url, retry, extraParams = {} } = options;
  dispatch(apiInprogress(action));
  try {
    const response = await axios.post(`${API_URL}${url}`, params);
    if (response.data) {
      dispatch(apiSuccess(action, response.data.data));
      return response.data;
    }
  } catch (error: any) {
    if (!error.response) {
      Toast.show({
        type: 'error',
        text1: ToastMessagesText.NetworkErrorTextOne,
        text2: ToastMessagesText.NetworkErrorTextTwo,
      });
    } else if (error.response.status == HttpStatusCode.PageNotFound) {
      Toast.show({
        type: 'error',
        text1: extraParams.PageNotFoundTextOne,
        text2: error.response?.data?.message || extraParams.PageNotFoundTextTwo,
      });
    } else if (error.response.status == HttpStatusCode.ConflictHandling) {
      Toast.show({
        type: 'error',
        text1: extraParams.ConflictHandlingTextOne,
        text2: error.response?.data?.message || extraParams.ConflictHandlingTextTwo,
      });
    } else if (error.response.status == HttpStatusCode.Unauthorized) {
      Toast.show({
        type: 'error',
        text1: extraParams.UnauthorizedTextOne,
        text2: error.response?.data?.message || extraParams.UnauthorizedTextTwo,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: ToastMessagesText.InternalServerErrorTextOne,
        text2: error.response?.data?.message || ToastMessagesText.InternalServerErrorTextTwo,
      });
    }
    dispatch(apiFailed(action, error));
    return error;
  }
};
