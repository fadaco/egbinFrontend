import {LOGIN, GET_ALL_STAFF, ADD_NEW_STAFF, EDIT_STAFF, DELETE_STAFF, CLEAR_USER} from '../actiontypes';

const INIT_VALUES = {
  user: {},
  staff: {},
  user_response: {}
}

const UserReducer = (state = INIT_VALUES, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user:{...action.payload}
            }
        case CLEAR_USER: 
            return {
                ...state,
                user: {}
            }
        case GET_ALL_STAFF:
            return {
                ...state,
                staff: {...action.payload}
            }
            case ADD_NEW_STAFF:
                return {
                    ...state,
                    user_response: {...action.payload}
                }
           case EDIT_STAFF:
                    return {
                        ...state,
                        user_response: {...action.payload}
                    }
          case DELETE_STAFF:
                        return {
                            ...state,
                            user_response: {...action.payload}
                        }
        default:
            return state;
    }
}

export default UserReducer;