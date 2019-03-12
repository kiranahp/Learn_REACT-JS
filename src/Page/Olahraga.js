import React, { Component } from 'react';
import axios from 'axios';
import '../Style/Blog.css';
import '../Style/bootstrap.min.css';
import Header from '../components/Header.js';
import NavbarNews from '../components/NavbarNews.js';
import Footer from '../components/Footer.js';
import Search from '../components/SearchBlog.js';
import PopularNews from '../components/PopularNews.js';
import BlogContent from '../components/BlogContent';
import az from '../img/ico/ico-gallery.png';

const apiKey = "7bd9771f997e43a4880691db83cb5221";
const baseUrl = "https://newsapi.org/";
const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=7bd9771f997e43a4880691db83cb5221"
const urlEverything = 'https://newsapi.org/v2/everything?q=olahraga&apiKey=7bd9771f997e43a4880691db83cb5221'

class Olahraga extends Component {
    constructor(props){
        super(props);
        this.state = {
            popularNews:[],
            newsContent:[]
        }
    }

    componentDidMount = () => {
        const self = this;
        axios
        .get(urlHeadline)
        .then(function(response){
            self.setState({popularNews: response.data.articles});
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
        axios
        .get(urlEverything)
        .then(function(response){
            self.setState({newsContent: response.data.articles});
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    render() {
        // console.log("here")
        // // const {popularNews} = this state;
        // // const {newsContent} = this state;
        return (
            <div className='App'>
                <NavbarNews/>
                <br/>
                <h1 style= {{textAlign: 'center', marginTop: '30px'}}>OLAHRAGA</h1>
                <br/>
                <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <Search/><br/><br/>
                        {this.state.popularNews.slice(0,5).map((item, key) => {
                        const title = item.title !== null ? item.title : "";
                        return <PopularNews key={key} title={title}/>;
                        })}
                    </div>
                    <div class="col-md-8">
                        {this.state.newsContent.slice(0,5).map((item, key) => {
                        const src_img = item.urlToImage === null ? az : item.urlToImage;
                        const content = item.content !== null ? item.content: "Tidak Punya Content";
                        const title = item.title !== null ? item.title : "Tidak ada judul";
                        const author = item.author !== null ? item.author: "tidak ada author";
                        return <BlogContent key={key} title={title} img={src_img} content={content} author={author}/>;
                        })}
                    </div>
                </div>
        </div>
            </div>
        )
    }
}

export default Olahraga;