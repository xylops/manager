import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password:'',
    user: null,
    loading:false
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.payload
            };
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.payload
            }
        case LOGIN_USER:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload,
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: 'Authentication Failed',
                password: '',
                loading: false
            }
        default:
            return state;
    }
}
