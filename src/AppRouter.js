import React, { Component } from 'react';
import MainRoute from './Routes/MainRoute';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from './Store'

//App styles
import './Style/Home.css';

// Custom components
import Header from './components/Header';
import Footer from './components/Footer';

class AppAjax extends Component {
    postSignout = () => {
        localStorage.removeItem('is_login');
        this.props.history.push('/');
    };
    render() {
        return (
            <div className='App'>
                <Header postSignout={this.props.postSignout} />
                <MainRoute />
                <Footer/>
            </div>
        );
    }
}

export default connect(
    "is_login, postSignout", actions)
(withRouter(AppAjax));
// export default withRouter(AppAjax);