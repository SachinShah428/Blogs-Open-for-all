import { ALLUSERS } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: ALLUSERS , payload: data });
  } catch (error) {
    console.log(error);
  }
};