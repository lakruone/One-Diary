import { INIT_USER_DATA } from "../../../shared/actions/actionTypes";

  const initialState = {
    user: {},
    userLoading: false
  };
  
  const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case INIT_USER_DATA:
        return {
          ...state,
          user: payload
        };
      default:
        return state;
    }
  };
  
  export default UserReducer;
  