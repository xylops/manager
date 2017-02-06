import React from 'react';
import { Text,  TouchableOpacity } from 'react-native';

var style = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight:5,
        minHeight:40
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

var Button = React.createClass({
    render:function(){
        return (
            <TouchableOpacity style={style.buttonStyle} onPress={this.props.onPress}>
                <Text style={style.textStyle}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        )
    }
});

export {Button};
