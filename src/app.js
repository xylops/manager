import React from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import Router from './Router'

var App = React.createClass({
    componentWillMount:function(){
        var config = {
            apiKey: "AIzaSyDQjbCBMOXbu1pMCji0scTCphUhIjb8q40",
            authDomain: "manager-5b567.firebaseapp.com",
            databaseURL: "https://manager-5b567.firebaseio.com",
            storageBucket: "manager-5b567.appspot.com",
            messagingSenderId: "739421558366"
        };
        firebase.initializeApp(config);
    },
    render:function(){
        return (
            <Provider store={
                createStore(reducers,
                {},
                applyMiddleware(ReduxThunk))}
            >
                <Router />
            </Provider>
        )
    }
});

export default App;
