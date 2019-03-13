import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'unistore/react';
import { actions } from '../Store';
import { withRouter } from 'react-router-dom';
import '../Style/bootstrap.min.css';
import '../Style/Home.css';

class SignIn extends Component {
    doLogin = () => {
        this.props.postLogin().then(()=> {
            console.log('this', this);
            this.props.history.replace('/Profile');
        });
    };
    
    render () {
        console.log('signin props', this.props);
        return (
            <section className="content signin" style={{textAlign:'center', marginTop:'50px', marginBottom:'50px'}}>
                <form onSubmit={e => e.preventDefault()}>
                <h4>Sign In</h4>
                <div>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        onChange={e => this.props.setField(e)}
                    />
                </div>
                <div>
                    <input
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={e => this.props.setField(e)}
                    />
                </div>
                <button onClick={() => this.doLogin()}>Sign In</button>
                <button type='reset'>Reset</button>
            </form>
            </section>
        )
    }
}

export default connect(
    "is_login, username, password", actions)
(withRouter(SignIn));

// export default SignIn;