import * as api from '../api/indexAPI'
import { AUTH } from '../Constants/actionTypes'

// Action creators:
// if they are async, must use redux-thunk

export const signin = (formData, history) => async (dispatch) => {
  try {
    // send data to db/backend, call the backend endpoint here:
    const {data} = await api.signIn(formData);
    // log in the user...
    dispatch({type: AUTH, data});
    // navigate back to homepage
    history.push('/');
  } catch (err) {
    console.log(err)
  }
} // formData and history passed in to signin in Auth.js 

export const signup = (formData, history) => async (dispatch) => {
  try {
    // send data to db/backend, call the backend endpoint here
    const {data} = await api.signUp(formData);
    // sign up the user...
    dispatch({type: AUTH, data});
    // navigate back to homepage
    history.push('/');
  } catch (err) {
    console.log(err)
  }
}