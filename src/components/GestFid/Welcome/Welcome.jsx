import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WelcomeComponent extends Component {
        render() {
            return (
                <div className="WelcomeComponent">
                    <section className="section-content bg padding-y">
                        <header className="section-heading">
                            <h2 className="section-title">Benvenuti in GestFid</h2>
                        </header>
                        <p>Saluti {this.props.match.params.userid}, clicca <Link to="/clienti">qui</Link> per vedere i clienti.</p>
                    </section>
                </div>
            )
        }
}