import { combineReducers } from 'redux';
import leads from './LeadReducer';
import auth from './AuthReducer';

export default combineReducers({
    leads,
    auth,
})