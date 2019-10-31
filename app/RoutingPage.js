import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './loginPage'
import Dashboard from './Dashboard';

export default class Routing extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} title="Login" hideNavBar initial={true} />
                    <Scene key="dashboard" component={Dashboard} title="Dashboard" hideNavBar />
                </Scene>
            </Router>
        );
    }
}