import React from 'react';
import { Picker, Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import * as actions from '../actions'

const style={
    pickerStickerStyle:{
        fontSize: 18,
        paddingLeft: 20
    }
}

var EmployeeCreate = React.createClass({
    render:function(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText = {(value)=>{
                            this.props.dispatch(actions.employeeUpdate('name', value ))
                        }}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                        value = {this.props.phone}
                        onChangeText = {(value)=>{
                            this.props.dispatch(actions.employeeUpdate('phone', value ))
                        }}
                    />
                </CardSection>

                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={style.pickerStickerStyle}>Shift</Text>
                    <Picker
                        selectedValue= { this.props.shift }
                        onValueChange= {(value)=>{
                            this.props.dispatch(actions.employeeUpdate('shift', value ))
                        }}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label= "Wednesday" value= "Wednesday" />
                        <Picker.Item label= "Thursday" value= "Thursday" />
                        <Picker.Item label= "Friday" value= "Friday" />
                        <Picker.Item label= "Saturday" value= "Saturday" />
                        <Picker.Item label= "Sunday" value= "Sunday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
})

export default connect((state)=>{
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift}
})(EmployeeCreate)
