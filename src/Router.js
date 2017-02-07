import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './component/LoginForm'
import EmployeeList from './component/EmployeeList'
import EmployeeCreate from './component/EmployeeCreate'

var RouterComponent = React.createClass({
    render:function(){
        return (
            <Router sceneStyle={{ paddingTop: 50}}>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Scene>
                <Scene key="main">
                    <Scene
                        onRight={()=>{Actions.employeeCreate()}}
                        rightTitle="Add"
                        key="employeeList"
                        component={EmployeeList}
                        title="Employee"
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                </Scene>
            </Router>
        )
    }
})

export default RouterComponent
