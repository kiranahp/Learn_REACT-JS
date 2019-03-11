import React, { Component } from 'react';
import Header from '../components/Header.js';
import GalleryContent from '../components/GalleryContent.js';
import Footer from '../components/Footer.js';

class Gallery extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <GalleryContent/>
        <Footer/>
      </div>
    );
  }
}

export default Gallery;
