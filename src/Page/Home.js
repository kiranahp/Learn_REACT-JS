import React, { Component } from 'react';
import '../Style/Home.css';
import '../Style/bootstrap.min.css';
import Header from '../components/Header.js';
import AppContent from '../components/AppContent.js';
import Footer from '../components/Footer.js';

class Home extends Component {
    render() {
        return (
            <div className='App'>
                <AppContent/>
            </div>
        )
    }
}

export default Home;