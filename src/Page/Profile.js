import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header.js';

const Profile = props => {
    const is_login = JSON.parse(localStorage.getItem('is_login'));
    const email = localStorage.getItem('email');
    const full_name = localStorage.getItem('full_name');
    console.log('is_login', is_login);

    if (is_login == null) {
        return <Redirect to={{ pathname: '/SignIn' }} />;
    } else {
        return (
            <div className='article-content-wrapper row info-box' style={{marginLeft:'500px'}}>
            <section>
                <h1 style={{ textAlign : 'center', marginTop:'40px' }}>Profile</h1>
                <p>
                    <label className='form-label'>Email: </label><br/>
                    <strong><i>{email}</i></strong>
                </p>
                <p>
                    <label className='form-label'>Full Name:</label><br/>
                    <strong><i>{full_name}</i></strong>
                </p>
            </section>
            </div>
        );
    }
    
};

export default Profile;