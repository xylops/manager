import React from 'react';
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common';
import * as actions from '../actions'

var LoginForm = React.createClass({
    onEmailChange:function(text){
        var { dispatch } = this.props;
        dispatch(actions.emailChange(text))
    },
    onPasswordChange: function(pw){
        var { dispatch } = this.props;
        dispatch(actions.passwordChange(pw))
    },
    onButtonPress:function(){
        // console.log(this.props)
        var {email, password, dispatch} = this.props;
        dispatch(actions.loginUser(email, password))
    },
    render:function(){
        var {email, password} = this.props;
        return (
            <Card>
                <CardSection>
                    <Input
                        label="E-mail"
                        placeholder="email@gmail.com"
                        onChangeText={(text)=> this.onEmailChange(text) }
                        value={email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText = {(pw)=>this.onPasswordChange(pw)}
                        value= {password}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
});

export default connect((state, actions)=>{
    return {
        email: state.auth.email,
        password: state.auth.password
    }
})(LoginForm);
