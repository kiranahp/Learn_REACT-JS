import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../Style/bootstrap.min.css';
import '../Style/Home.css';
import Header from '../components/Header.js';

class SignIn extends Component {
    state = { username: '', password: ''};
    changeInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    postLogin = () => {
        const { username, password } = this.state;
        const data = {
            username: username,
            password: password
        };
        const self = this;
        axios
            // .post("https://atareact.free.beeceptor.com/auth", data)
            .post("https://maealterra.free.beeceptor.com/login", data)
            .then(function(response) {
                console.log(response.data);
                if (response.data.hasOwnProperty('api_key')) {
                    localStorage.setItem('api_key', response.data.api_key);
                    localStorage.setItem('is_login', true);
                    localStorage.setItem('full_name', response.data.full_name);
                    localStorage.setItem('email', response.data.email);
                    self.props.history.push('/profile');
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    };
    render () {
        console.log('state', this.state);
        return (
            <section className="content signin" style={{textAlign:'center', marginTop:'50px', marginBottom:'50px'}}>
                <form onSubmit={e => e.preventDefault()}>
                <h4>Sign In</h4>
                <div>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        onChange={e => this.changeInput(e)}
                    />
                </div>
                <div>
                    <input
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={e => this.changeInput(e)}
                    />
                </div>
                <button onClick={() => this.postLogin()}>Sign In</button>
                <button type='reset'>Reset</button>
            </form>
            </section>
        )
    }
}

export default SignIn;