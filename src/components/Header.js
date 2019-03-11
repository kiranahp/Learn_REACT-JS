import React, { Component } from 'react';
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
                    <div class="col-6">
                      <div class="logoalteraatas"><img src={logo} alt="Logo"/></div>
                    </div>
                    <div class="col-6">
                      <ul>
                          <li><a href="#" class="currentLink" style={{textDecoration:'none'}}>ABOUT</a></li>
                          <li><a href="#" style={{textDecoration:'none'}}>GALLERY</a></li>
                          <li><a href="#" style={{textDecoration:'none'}}>CONTACT</a></li>
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
