import { EMPLOYEE_LOGIN_FAIL, EMPLOYEE_LOGIN_REQUEST, EMPLOYEE_LOGIN_SUCCESS, EMPLOYEE_LOGOUT, EMPLOYEE_LOGOUT_FAIL, EMPLOYEE_LOGOUT_REQUEST, EMPLOYEE_LOGOUT_SUCCESS, EMPLOYEE_REGISTER_FAIL, EMPLOYEE_REGISTER_REQUEST, EMPLOYEE_REGISTER_SUCCESS, GET_STAT_FAIL, GET_STAT_REQUEST, GET_STAT_SUCCESS } from "../constants/employeeConstant"

export const employeeReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case EMPLOYEE_REGISTER_REQUEST: return {
            ...state,
            loading: true
        }
        case EMPLOYEE_REGISTER_SUCCESS: return {
            ...state,
            loading: false,
            employeeRegistered: true
        }
        case EMPLOYEE_REGISTER_FAIL: return {
            ...state,
            loading: false,
            employeeRegisteredError: payload
        }
        case EMPLOYEE_LOGIN_REQUEST: return {
            ...state,
            loading: true
        }
        case EMPLOYEE_LOGIN_SUCCESS: return {
            ...state,
            loading: false,
            employeeLogin: payload
        }
        case EMPLOYEE_LOGIN_FAIL: return {
            ...state,
            loading: false,
            employeeLoginError: payload
        }
        case EMPLOYEE_LOGOUT: return {
            loading: true,
            employeeLogout: payload
        }
        case GET_STAT_REQUEST: return {
            ...state,
            loading: true,
        }
        case GET_STAT_SUCCESS: return {
            ...state,
            loading: false,
            adminstat: payload
        }
        case GET_STAT_FAIL: return {
            loading: true,
            employeeLogout: payload
        }
        default: return state
    }
}
 
export const getEmployeeData = state => state.allEmployees