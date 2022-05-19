import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const signin = (formData , navigate ) => async (dispatch) => {
  try {

    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate('/');

  } catch (error) {
   alert ( "INVALID CREDENTIALS" ) ;
    console.log(error.message);
  }
};

export const signup = (formData , navigate ) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate('/');

  } catch (error) {
   alert ( "YOU ALREADY HAVE AN ACCOUNT OR YOUR PASSWORDS DOESNOT MATCH" ) ;
    console.log(error.message);
  }
};
