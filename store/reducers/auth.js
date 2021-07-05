import * as authActions from "../actions/auth";

const initialState = {
  token: "",
  userId: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authActions.SIGNIN:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case authActions.SIGNUP:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };

    default:
      return state;
  }
};
