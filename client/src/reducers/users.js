import { ALLUSERS } from '../constants/actionTypes';

export default ( users = [], action ) => {
  switch (action.type) {
    case ALLUSERS:
      return action.payload;
    default:
      return users ;
  }
};
