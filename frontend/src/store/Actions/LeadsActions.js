import Axios from "axios";
import { ADD_LEADS, GET_LEADS, DELETE_LEADS } from './Types';
import { tokenConfig } from './AuthActions'

export const get_leads = () => (dispatch, getState) => {
    Axios.get(`api/leads/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        }).catch(err => console.log(err))
};

export const delete_lead = (id) => (dispatch, getState) => {
    Axios.delete(`api/leads/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_LEADS,
                payload: id
            })
        }).catch(err => console.log(err))
};

export const add_lead = (lead) => (dispatch, getState) => {
    Axios.post(`api/leads/`, lead, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_LEADS,
                payload: res.data
            }).catch(err => console.log(err))
        })
};
