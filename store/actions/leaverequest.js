import {ApiEndpoints} from '../../shared/endpoint.js';
import {SERVER_REQUEST} from '../../shared/backend'
import {GET_LEAVE_REQUEST, MANAGE_LEAVE_REQUEST, CREATE_REQUEST_LEAVE, YOUR_LEAVE_REQUEST} from '../actiontypes'


export const getAllLeaveRequest = () => async (dispatch) => {
    const response = await SERVER_REQUEST(ApiEndpoints.FETCH_ALL_SICK_LEAVE, 'get')
    console.log(response)
    dispatch({type: GET_LEAVE_REQUEST, payload: response})
}

export const manageAleaveRequest = (data) => async (dispatch) => {
    const response = await SERVER_REQUEST(ApiEndpoints.MANAGE_REQUEST, 'post', data)
    console.log(response)
    dispatch({type: MANAGE_LEAVE_REQUEST, payload: response})
}

export const createLeaveRequest = (data) => async (dispatch) => {
    const response = await SERVER_REQUEST(ApiEndpoints.CREATE_REQUEST_LEAVE, 'post', data);
    console.log(response);
    dispatch({type: CREATE_REQUEST_LEAVE, payload: response})
}

export const getYourLeaveRequest = () => async (dispatch) => {
    const response = await SERVER_REQUEST(ApiEndpoints.YOUR_LEAVE_REQUEST, 'get');
    console.log(response)
    dispatch({type: YOUR_LEAVE_REQUEST, payload: response})
}