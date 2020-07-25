import { USER_LOADING, USER_LOADED, USER_SUCCESS, USER_LOGOUT, USER_REGISTER } from './Types';
import Axios from 'axios'

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    Axios.get(`api/auth/user`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }).catch(err => console.log(err))
};

export const login = (username, password) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password });

    Axios.post(`api/auth/login`, body, config)
        .then(res => {
            dispatch({
                type: USER_SUCCESS,
                payload: res.data
            })
        }).catch(err => console.log(err))
};

export const logout = () => (dispatch, getState) => {
    Axios.post(`api/auth/logout`, null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOGOUT,
                payload: res.data
            })
        }).catch(err => console.log(err))
};

export const register = (username, email , password) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username,email, password });

    Axios.post(`api/auth/register`, body, config)
        .then(res => {
            dispatch({
                type: USER_REGISTER,
                payload: res.data
            })
        }).catch(err => alert('Username already exist'))
};

export const tokenConfig = getState => {
    const token = getState().auth.token

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config
};
