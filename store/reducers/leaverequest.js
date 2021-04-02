import {GET_LEAVE_REQUEST, MANAGE_LEAVE_REQUEST, YOUR_LEAVE_REQUEST, CREATE_REQUEST_LEAVE} from '../actiontypes'

const INIT_VALUES = {
    leave_request: null, 
    manage_leave_request: {},
    leave_request_response: {}
  }
  
  const LeaveRequestReducer = (state = INIT_VALUES, action) => {
      switch(action.type) {
          case GET_LEAVE_REQUEST:
              console.log('here')
              console.log(action.payload)
              return {
                  ...state,
                  leave_request:action.payload
                  }
            case YOUR_LEAVE_REQUEST:
                    console.log('here')
                    console.log(action.payload)
                    return {
                        ...state,
                        leave_request:action.payload
                        }
          case MANAGE_LEAVE_REQUEST:
              return {
                  ...state,
                  manage_leave_request: {...action.payload}
              }
            case CREATE_REQUEST_LEAVE:
                return {
                    ...state,
                    leave_request_response: {...action.payload}
                }
          default:
              return state;
      }
  }
  
  export default LeaveRequestReducer;