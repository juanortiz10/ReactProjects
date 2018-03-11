import { combineReducers } from 'redux'
import { getUsers, getUserById } from './UserReducer'

export default combineReducers({
  getUsers,
  getUserById
});
