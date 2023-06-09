import { callApi, apiTypeBuilder } from '../../utility/api'

const LOGIN = apiTypeBuilder("LOGIN");

export const login = (email, password, onSuccess, onFailure) =>
  callApi({
    type: LOGIN,
    method: "POST",
    body: { email, password },
    endpoint: "/interviews/login",
    onSuccess,
    onFailure
  });

export const initialState = {
  loggedIn: !!localStorage.getItem("@token") || false,
  user: {}
}; 

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.success: 
      return {
        ...state,
        user: action.payload.mockUser,
        loggedIn: true,
      };
   default:
    return state;
  }
};