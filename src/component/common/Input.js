import React from 'react';
import { TextInput, View, Text } from 'react-native';

const style = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

var Input = React.createClass({
    render:function(){
        var { label, onChangeText, value, placeholder, secureTextEntry } = this.props;
        return(
            <View style = { style.containerStyle }>
                <Text style={ style.labelStyle }>{ label }</Text>
                <TextInput
                    secureTextEntry = {secureTextEntry}
                    placeholder = { placeholder }
                    autoCorrect = { false }
                    style = { style.inputStyle }
                    value = { value }
                    onChangeText = { onChangeText }
                />
            </View>
        )
    }
});

export { Input }
