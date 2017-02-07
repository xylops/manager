import React from 'react';
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Spinner } from './common';
import * as actions from '../actions'

const style = {
    errorTextStyle: {
        fontSize:20,
        alignSelf:'center',
        color: 'red'
    }
}

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
        var {email, password, dispatch} = this.props;
        dispatch(actions.loginUser(email, password))
    },
    render:function(){
        var {email, password, error, loading} = this.props;

        var renderButton = () => {
            if(loading){
                return <Spinner size="large" />
            }else{
                return (
                    <Button onPress={this.onButtonPress}>
                        Login
                    </Button>
                )
            }
        }

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

                <Text style={style.errorTextStyle}>
                    {error}
                </Text>

                <CardSection>
                    {renderButton()}
                </CardSection>
            </Card>
        )
    }
});

export default connect((state, actions)=>{
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
})(LoginForm);
