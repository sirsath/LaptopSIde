import api from "../../api";
import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, ORDER_GET_STATUS_FAIL, ORDER_GET_STATUS_REQUEST, ORDER_GET_STATUS_SUCCESS, UPDATE_USER_STATUS_FAIL, UPDATE_USER_STATUS_REQUEST, UPDATE_USER_STATUS_SUCCESS } from "../constants/UserConstant";

export const getUserAction = data => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_USER_REQUEST })
        const { data } = await api.get("/employee/admin-user", {
            headers: { authorization: getState().allEmployees.employeeLogin.token }
        })
        dispatch({ type: GET_USER_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: GET_USER_FAIL, payload: error.message })
    }

}
export const UpdateUserStatusAction = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: UPDATE_USER_STATUS_REQUEST })
        const { data } = await api.put(`/employee//status/${user._id}`, user, {
            headers: { authorization: getState().allEmployees.employeeLogin.token }
        })
        dispatch({ type: UPDATE_USER_STATUS_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: UPDATE_USER_STATUS_FAIL, payload: error.message })
    }

}
// Order Hostory 
export const getOrderHistoryByAdminAction = (UserId) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_GET_STATUS_REQUEST })
        const { data } = await api.get(`/employee/admin-orderhistory/${UserId}`, {
            headers: { authorization: getState().allEmployees.employeeLogin.token }
        })
        dispatch({ type: ORDER_GET_STATUS_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: ORDER_GET_STATUS_FAIL, payload: error.message })
    }
}