import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE
} from '../actions/types'

export default (state = {
    email: '',
    password:''
}, action) =>{
    console.log(action)
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
        default:
            return state;
    }
}
