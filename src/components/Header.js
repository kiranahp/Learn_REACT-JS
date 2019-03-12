import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

import '../Style/Home.css';
import '../Style/bootstrap.min.css';
import logo from '../img/logo/logo-alterra-academy.png';

class Header extends Component {
  render() {
    return (
      <div className="App">
          <navbar>
            <div class="navbarUtama shadow-sm bg-white rounded">
              <div class="container">
                <div>
                  <div class="row">
                    <div class="col-2">
                      <div class="logoalteraatas"><img src={logo} alt="Logo"/></div>
                    </div>
                    <div class="col-10">
                      <ul>
                          <li><Link to="/" style={{textDecoration:'none'}}>ABOUT</Link></li>
                          <li><Link to="/Gallery" style={{textDecoration:'none'}}>GALLERY</Link></li>
                          <li><Link to="/Contact" style={{textDecoration:'none'}}>CONTACT</Link></li>
                          <li><Link to="/News" style={{textDecoration:'none'}}>NEWS</Link></li>
                          <li><Link to="/Profile" style={{textDecoration:'none'}}>PROFILE</Link></li>
                          <li><Link to="/SignIn" style={{textDecoration:'none'}}>SIGN IN</Link></li>
                          <li><Link to="/" onClick={() => this.props.postSignout()} style={{textDecoration:'none'}}>SIGN OUT</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </navbar>
      </div>
    );
  }
}

export default Header;
