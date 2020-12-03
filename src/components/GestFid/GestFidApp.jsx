import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomeComponent from './Welcome/Welcome';
import ClientiComponent from './Clienti/Clienti';
import LoginComponent from './Login/LoginComponent';
import LogoutComponent from './Logout/LogoutComponent';
import HeaderComponent from './Header/HeaderComponent';
import FooterComponent from './Footer/FooterComponent';
import AuthRoute from '../AuthRoute';

export default class GestFidApp extends Component {
    render () {
        return (
            <div className="GestFidApp">
                <Router>
                <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/logout" component={LogoutComponent}/>
                        <AuthRoute path="/welcome/:userid" component={WelcomeComponent}/>
                        <AuthRoute path="/clienti" component={ClientiComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

function ErrorComponent() {
    return <p>Pagina Non Trovata.</p>
}