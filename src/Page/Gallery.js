import React, { Component } from 'react';
import Header from '../components/Header.js';
import GalleryContent from '../components/GalleryContent.js';
import Footer from '../components/Footer.js';

class Gallery extends Component {
  render() {
    return (
      <div className="App">
        <GalleryContent/>
      </div>
    );
  }
}

export default Gallery;
