import React from 'react';
import { View } from 'react-native';

const style = {
    containerStyle:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor : '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position:'relative'
    }
}

var CardSection = React.createClass({
    render:function(){
        console.log(this.props.style)
        var {album} = this.props;
        return (
            <View style={[style.containerStyle, this.props.style]}>
                {this.props.children}
            </View>
        )
    }
})

export {CardSection};
