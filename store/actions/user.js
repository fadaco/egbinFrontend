import {SERVER_REQUEST} from '../../shared/backend'
import {ApiEndpoints} from '../../shared/endpoint'
import {LOGIN, GET_ALL_STAFF, ADD_NEW_STAFF, EDIT_STAFF, DELETE_STAFF, CLEAR_USER} from '../actiontypes'

export const loginUser = (data) => async(dispatch) => {
    const response = await SERVER_REQUEST(ApiEndpoints.LOGIN, 'post', data)
    dispatch({type: LOGIN, payload: response})
}

export const clearuserstatus = () => async (dispatch) => {
    dispatch({type: CLEAR_USER})
}

export const fetchAllStaff = () => async (dispatch) => {
    const response = await SERVER_REQUEST(ApiEndpoints.FETCH_ALL_STAFF, 'get');
    console.log(response);
    dispatch({type: GET_ALL_STAFF, payload: response})
}

export const addNewStaff = (data) => async (dispatch) => {
    const response = await SERVER_REQUEST(ApiEndpoints.ADD_NEW_STAFF, 'post', data)
    console.log(response)
    dispatch({type: ADD_NEW_STAFF, payload: response})
}

export const editStaff = (data) => async (dispatch) => {
    const response = await SERVER_REQUEST(ApiEndpoints.EDIT_STAFF, 'post', data)
    console.log(response);
    dispatch({type: EDIT_STAFF, payload: response})
}

export const deleteStaff = (data) => async (dispatch) => {
    const response = await SERVER_REQUEST(ApiEndpoints.DELETE_STAFF, 'post', data)
    console.log(response);
    dispatch({type: DELETE_STAFF, payload: response})
}