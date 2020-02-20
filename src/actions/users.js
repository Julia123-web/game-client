import axios from "axios";

export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

function signUpSuccess() {
  return { type: USER_CREATED };
}

export function signUp(name, email, password) {
  return function(dispatch, getState) {
    axios
      .post(`${dbUrl}/user`, {
        email: email,
        name: name,
        password: password
      })
      .then(response => dispatch(signUpSuccess()));
  };
}

function loginSuccess(token, name) {
  return {
    type: LOGIN_SUCCESS,
    payload: { token, name }
  };
}

export function login(name, email, password) {
  return function(dispatch, getState) {
    axios
      .post(`${dbUrl}/login`, {
        email: email,
        name: name,
        password: password
      })

      .then(response =>
        dispatch(loginSuccess(response.data.token, response.data.name))
      );
  };
}
