import React, { Component } from 'react';
import '../Style/Blog.css';
import '../Style/bootstrap.min.css';
import Header from '../components/Header.js';
import BlogContent from '../components/BlogContent.js';
import Footer from '../components/Footer.js';

class Blog extends Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <BlogContent/>
                <Footer/>
            </div>
        )
    }
}

export default Blog;