import React, { Component } from 'react';
import './LoginComponent.css';
import AuthenticationServices from '../services/authservice.js';

export default class LoginComponent extends Component {

    state = {
        userid: '', 
        password: '',
        isLogged: false,    
        nologged: true
    }

    render() {
        return (
            <div className="LoginComponent">
                <section className="section-content bg padding-y">
                    <div className="container login-container">
                        <div className="row">
                            <div className="col-md-6 login-form">
                                <h3>Accesso a GestFid</h3>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="userid" placeholder="Nome Utente" value={this.state.userid} onChange={this.GestMod}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.GestMod}/>
                                </div>
                                <div className="form-group">
                                    <button className="btnSubmit" onClick={this.Login}>Connetti</button>
                                </div>
                                <div className="form-group">
                                    <a hfre="#" className="ForgetPwd">Password Dimenticata?</a>
                                </div>
                                <ConnexKoMsg noLogged={this.state.noLogged}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    Login = () => {
        console.log(this.state.userid);
        console.log(this.state.password);

        if (this.state.userid ==='Nicola' && this.state.password === '123_Stella') {
            AuthenticationServices.saveUserInfo(this.state.userid);
            this.props.history.push(`/welcome/${this.state.userid}`)
        } else {
            this.setState({isLogged: false})
            this.setState({noLogged: true})
        }
    }

    GestMod = (event) => {
        this.setState (
            {
                [event.target.name]: event.target.value
            }
        )
    }
}

function ConnexKoMsg(props) {
    if (props.noLogged) {
        return <div className="alert alert-danger" role="alert">Spacente la user id e/o la password sono errate!</div>
    }
    return null;
}