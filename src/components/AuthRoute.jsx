import React, { Component } from 'react';
import AuthenticationService from './GestFid/services/authservice.js';
import {Redirect, Route} from 'react-router-dom';

export default class AuthRoute extends Component {
    render() {
        if (AuthenticationService.isLogged()) {
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/login"/>
        }
    }
}