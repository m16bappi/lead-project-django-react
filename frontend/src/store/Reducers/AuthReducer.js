import { USER_LOADING, USER_LOADED, AUTH_ERROR, USER_SUCCESS, USER_LOGOUT, USER_REGISTER } from '../Actions/Types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case AUTH_ERROR:
        case USER_LOGOUT:
            return {
                ...state,
                token: localStorage.removeItem('token'),
                isAuthenticated: null,
                isLoading: false,
                user: null
            }
        case USER_SUCCESS:
        case USER_REGISTER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        default:
            return state
    }
}