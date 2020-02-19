import { LOGIN_SUCCESS } from "../actions/users";

const initialState = { token: null, name: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name
      };
    default:
      return state;
  }
};
