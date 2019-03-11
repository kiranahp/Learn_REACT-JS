import React, { Component } from 'react';
import '../Style/gallery.css';
import '../Style/bootstrap.min.css';

class GalleryContent extends Component {
  render() {
    return (
      <div className="App">

<isi>
        <div>
            <div class="container">
                <div class="row" style={{marginTop: "50px"}}>
                    <nav class="navbar navbar-light ">
                        <img src={require("../img/ico/ico-gallery.png")} class="d-inline-block align-top" alt=""/>
                        <span id="GalleryFont">GALLERY</span>
                    </nav>
                </div>
                <hr class="borderhr"/>
            </div>
            
            <div class="container-fluid">
                <div class="row justify-content-center" style={{marginLeft: "60px", margiBottom: "200px"}}>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="fade-right" src={require("../img/img/exp-gallery/jake-allison-1322894-unsplash.jpg")} alt="gg" class="rounded imagesssssss" />
                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="flip-up" src={require("../img/img/exp-gallery/jay-lee-1323073-unsplash.jpg")} alt="gg" class="rounded imagesssssss"/>
                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="fade-left" src={require("../img/img/exp-gallery/nic-yee-1321843-unsplash.jpg")} alt="gg" class="rounded imagesssssss"/>
                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="fade-right" src={require("../img/img/exp-gallery/phil-desforges-1322844-unsplash.jpg")} alt="gg" class=" rounded imagesssssss"/>
                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="flip-up" src={require("../img/img/exp-gallery/ryan-1321510-unsplash.jpg")} alt="gg" class="rounded imagesssssss"/>

                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6">
                        <img data-aos="fade-left" src={require("../img/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg")} alt="gg" class="rounded imagesssssss"/>
                    </div>
                </div>
            </div>
            </div>
        </isi>
        
      </div>
    );
  }
}

export default GalleryContent;
