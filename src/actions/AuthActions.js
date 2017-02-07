import  {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types'
import { Actions } from 'react-native-router-flux'
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
        dispatch({ type: LOGIN_USER })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( user => loginUserSuccess(dispatch, user) )
            .catch((error) => {
                console.log(error)
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch( () => loginUserFail(dispatch) )
            })
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload: user
    })
    //page route
    Actions.main()
}

const loginUserFail = (dispatch) =>{
    dispatch({
        type: LOGIN_USER_FAIL
    })
}
