import React, { Component } from 'react';
import './App.css';
import './Home.css';
import './bootstrap.min.css';
import logo from './img/logo/logo-alterra-academy.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
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
          <div class="Jumbotron-Utama">
        <div class="jumbotron jumbotron-main">
            <div class="container animated flipInX delay">
                <center>
                    <div>
                      <img class="image-jumbotron" src={require("./img/img/Profile-picture-Maria-1-200x200.jpg")} alt="browsermu rusak"/>
                    </div>
                    <div class="font-jumbotron">
                        <div>
                            <h1 class="h1editor">Hian Oliviera</h1>
                        </div>
                        <div>
                            <i class="fa fa-map-marker" style={{fontSize:"24px"}}></i>
                            <span style={{fontSize:"13px"}}>Malang, Indonesia</span>
                        </div>
                        <div>
                            <h2 style={{fontSize:'20px', margin: '19px', fontWeight: "semibold;"}}>Front End Dev ,UI/UX and
                                Design</h2>
                        </div>
                        <div>
                            <a class="btn btn-primary btn-lg button-jumbotron" href="#" role="Download Cv" style={{marginTop:"5px;"}}>Download
                                CV</a>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    </div>
    <isi>
        <div data-aos="fade-up">

        <div class="isi-ukuran" id="boxmain">
            <div class="panel panel-default">
                <div class="container">
                    <div class="row" style={{margin:"30px;"}}>
                        <div class="col-6">
                            <div class="row">
                                <div class="col-12">
                                    <h2>About Me</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p style={{color:"orange"}}>Hi! I am Hian Oliviera, I work as a Front-end Developer at Alterra Group</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p>Front-end Developer are constructive work websites use HTML,CSS, and JavaScript.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p>Front-end Developer are the people who make it design and develop the design
                                        until become a website that can run.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <div class="col-12">
                                    <h2>Information</h2>
                                </div>
                                <table class="table">
                                    <tr>
                                        <td><b>Age</b></td>
                                        <td>22th</td>
                                    </tr>
                                    <tr>
                                        <td><b>Email</b></td>
                                        <td>Hian Oliviera@altera.id</td>
                                    </tr>
                                    <tr>
                                        <td><b>Address</b></td>
                                        <td>Malang, Jawa Timur</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </isi>

    <footer>
        <div class="jumbotron jumbotron-fluid jumbotron-footer" style={{backgroundColor:"#19345E"}}>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="footer-copyright">
                            <div>
                                <img class="footer-logo" src={require("./img/logo/logo-alterra-academy-plain.png")} alt="browsermu rusak"/>
                            </div>
                            <div>
                                <p style={{fontSize: "12px"}}>© Copyright Alterra Group 2019</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 follow-Us">
                        <div class="followbro" style={{float:"right"}}>
                            <div class="row">
                                <div class="col-12">
                                    <b>
                                        <p>Follow Us On</p>
                                    </b>
                                </div>
                            </div>
                            <div>
                                <div class="row">
                                    <div class="col-3">
                                        <span class="fa fa-facebook-f"></span>
                                    </div>
                                    <div class="col-3">
                                        <span style={{fontSize: "12px"}}>Facebook</span>
                                    </div>
                                </div>
                                <div class="row col3">
                                    <div class="col-3">
                                        <span class="fa fa fa-twitter"></span>
                                    </div>
                                    <div class="col-3">
                                        <span style={{fontSize: "12px"}}>Twitter</span> </div>
                                </div>
                                <div class="row col3">
                                    <div class="col-3">
                                        <span class="fa fa-instagram"></span>
                                    </div>
                                    <div class="col-3">
                                        <span style={{fontSize: "12px"}}>Instagram</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </body>
      </div>
    );
  }
}

export default App;
