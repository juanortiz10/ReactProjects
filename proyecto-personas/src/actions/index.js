import http from './http'

//getUsers

const startGetUsers = () => { return  { type: 'START_GET_USERS', ready: false }}
const completeGetUsers = (data) => { return { type: 'COMPLETE_GET_USERS', data }}
const errorGetUsers = (err) => { return { type: 'ERROR_GET_USERS', err }}

const startGetUserById = () => { return  { type: 'START_GET_USER_BY_ID', ready: false }}
const completeGetUserById = (data) => { return { type: 'COMPLETE_GET_USER_BY_ID', data }}
const errorGetUserById= (err) => { return { type: 'ERROR_GET_USER_BY_ID', err }}

export const getUsers = () => {
  return ( dispatch, getState ) => {
    dispatch(startGetUsers());
    http.get('users/')
    .then((response) => {
      if (response.data)
        dispatch(completeGetUsers(response.data));
    })
    .catch((err) => {
      dispatch(errorGetUsers(err));
    })
  }
}

export const getUserById = ( userId ) => {
  return ( dispatch, getState ) => {
    dispatch(startGetUserById());
    http.get('users/' + userId)
    .then((response) => {
      if (response.data)
        dispatch(completeGetUserById(response.data));
    })
    .catch((err) => {
      dispatch(errorGetUserById(err));
    })
  }
}
