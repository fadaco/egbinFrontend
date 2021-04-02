import {LOGIN, GET_ALL_STAFF} from '../actiontypes';

const INIT_VALUES = {
  user: {},
  staff: {}
}

const UserReducer = (state = INIT_VALUES, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user:{...action.payload}
            }
        case GET_ALL_STAFF:
            return {
                ...state,
                staff: {...action.payload}
            }
        default:
            return state;
    }
}

export default UserReducer;