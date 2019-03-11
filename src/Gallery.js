import React, { Component } from 'react';
import './gallery.css';
import './Home.css';
import './bootstrap.min.css';
import logo from './img/logo/logo-alterra-academy.png';

class Gallery extends Component {
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

        <isi>
        <div>
            <div class="container">
                <div class="row" style={{marginTop: "50px"}}>
                    <nav class="navbar navbar-light ">
                        <img src={require("./img/ico/ico-gallery.png")} class="d-inline-block align-top" alt=""/>
                        <span id="GalleryFont">GALLERY</span>
                    </nav>
                </div>
                <hr class="borderhr"/>
            </div>
            
            <div class="container-fluid">
                <div class="row justify-content-center" style={{marginLeft: "60px", margiBottom: "200px"}}>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="fade-right" src={require("./img/img/exp-gallery/jake-allison-1322894-unsplash.jpg")} alt="gg" class="rounded imagesssssss" />
                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="flip-up" src={require("./img/img/exp-gallery/jay-lee-1323073-unsplash.jpg")} alt="gg" class="rounded imagesssssss"/>
                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="fade-left" src={require("./img/img/exp-gallery/nic-yee-1321843-unsplash.jpg")} alt="gg" class="rounded imagesssssss"/>
                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="fade-right" src={require("./img/img/exp-gallery/phil-desforges-1322844-unsplash.jpg")} alt="gg" class=" rounded imagesssssss"/>
                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="flip-up" src={require("./img/img/exp-gallery/ryan-1321510-unsplash.jpg")} alt="gg" class="rounded imagesssssss"/>

                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="fade-left" src={require("./img/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg")} alt="gg" class="rounded imagesssssss"/>
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

export default Gallery;
