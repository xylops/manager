import  {
    EMAIL_CHANGE,
    PASSWORD_CHANGE
} from './types'
import firebase from 'firebase';

export var emailChange = (text) => {
    return {
        type: EMAIL_CHANGE,
        payload:text
    }
}

export var passwordChange = (pw) => {
    return {
        type: PASSWORD_CHANGE,
        payload:pw
    }
}

export var loginUser = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            (user)=>{
                dispatch({type:'LOGIN_USER_SUCCESS', payload: user})
            }
        )
    }
}
