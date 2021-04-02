import {combineReducers} from 'redux';
import UserReducer from './user';
import LeaveRequestReducer from './leaverequest'

export default combineReducers({
   userReducer: UserReducer,
   leaveRequestReducer: LeaveRequestReducer
})