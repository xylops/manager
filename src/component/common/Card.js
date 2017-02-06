import React from 'react';
import { View } from 'react-native';

const style = {
    containerStyle:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        marginLeft : 5,
        marginRight: 5,
        marginTop: 10
    }
}

var Card = React.createClass({
    render:function(){
        var {album} = this.props;
        return (
            <View style={style.containerStyle}>
                {this.props.children}
            </View>
        )
    }
})

export {Card};
