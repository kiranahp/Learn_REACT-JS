import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Style/Home.css';
import '../Style/bootstrap.min.css';

class NavBarNews extends Component {
  render() {
    return (
      <div className="App">
          <navbar>
            <div class="navbarUtama shadow-sm bg-white rounded">
              <div class="container">
                  <div class="row" style={{backgroundColor:'#19345E', marginLeft: '300px', marginRight: '250px'}}>
                      <ul>
                          <li><Link to="/Politik" style={{textDecoration:'none', color:'white'}}>POLITIK</Link></li>
                          <li><Link to="/Ekonomi" style={{textDecoration:'none', color:'white'}}>EKONOMI</Link></li>
                          <li><Link to="/Olahraga" style={{textDecoration:'none', color:'white'}}>OLAHRAGA</Link></li>
                          <li><Link to="/Hiburan" style={{textDecoration:'none', color:'white'}}>HIBURAN</Link></li>
                      </ul>
                  </div>
                </div>
              </div>
          </navbar>
      </div>
    );
  }
}

export default NavBarNews;
