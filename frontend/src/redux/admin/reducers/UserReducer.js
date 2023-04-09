import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, ORDER_GET_STATUS_FAIL, ORDER_GET_STATUS_REQUEST, ORDER_GET_STATUS_SUCCESS, UPDATE_USER_STATUS_FAIL, UPDATE_USER_STATUS_REQUEST, UPDATE_USER_STATUS_SUCCESS } from "../constants/UserConstant"

export const adminUserReducer = (state = { adminUsers: []  , UserOrderByAdmin :[]}, { type, payload }) => {
    switch (type) {
        case GET_USER_REQUEST: return {
            ...state,
            loading: true
        }
        case GET_USER_SUCCESS: return {
            ...state,
            loading: false,
            adminUsers: payload
        }
        case GET_USER_FAIL: return {
            ...state,
            loading: false,
            UserDataError: payload
        }
        case UPDATE_USER_STATUS_REQUEST: return {
            ...state,
            loading: true
        }
        case UPDATE_USER_STATUS_SUCCESS: return {
            ...state,
            loading: false,
            statusUpdate: true,
            toggle: !state.toggle
        }
        case UPDATE_USER_STATUS_FAIL: return {
            ...state,
            loading: false,
            Error: payload
        }
        case ORDER_GET_STATUS_REQUEST: return {
            ...state,
            loading: true
        }
        case ORDER_GET_STATUS_SUCCESS: return {
            ...state,
            loading: false,
            UserOrderByAdmin: payload,
        }
        case ORDER_GET_STATUS_FAIL: return {
            ...state,
            loading: false,
            Error: payload
        }

        default: return state
    }
}

export const getAdminUser = state => state.alladminUsers

