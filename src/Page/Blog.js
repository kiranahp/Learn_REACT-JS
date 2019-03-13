import React, { Component } from 'react';
import axios from 'axios';
import '../Style/Blog.css';
import '../Style/bootstrap.min.css';
import NavbarNews from '../components/NavbarNews.js';
import Search from '../components/SearchBlog.js';
import PopularNews from '../components/PopularNews.js';
import BlogContent from '../components/BlogContent';
import az from '../img/ico/ico-gallery.png';

const apiKey = "7bd9771f997e43a4880691db83cb5221";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=7bd9771f997e43a4880691db83cb5221"
const urlEverything = 'https://newsapi.org/v2/everything?q=id&apiKey=7bd9771f997e43a4880691db83cb5221'

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            popularNews:[],
            newsContent:[],
            searchText : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.doSearch = this.doSearch.bind(this);
    }

    componentDidMount(){
        let self = this;
        axios.get(urlHeadline).then(function(response){
            self.setState({popularNews : response.data.articles});
            //console.log(response.data);
        }).catch(function(error){
            console.log(error);
        });
    
        axios.get(urlEverything).then(function(response){
            self.setState({newsContent : response.data.articles});
            //console.log(response.data);
        }).catch(function(error){
            console.log(error);
        });
            
      }
      
      handleChange(e){
        this.doSearch(e.target.value);
      }
    
      doSearch(keyword){
        let self = this;
        let urlSearch = baseUrl + "everything?q="+ keyword + "&apiKey=" + apiKey;
        // console.log("testing do search", urlSearch)
        if(keyword.length > 2){
            axios.get(urlSearch).then(function(response){
                self.setState({newsContent : response.data.articles});
                // console.log('test response', response)
            }).catch(function(error){
                console.log(error);
            });
        }
        
    }

    render() {
        // console.log("here")
        // // const {popularNews, newsContent} = this.state;
        return (
            <div className='App'>
                <NavbarNews/>
                <br/>
                <h1 style= {{textAlign: 'center', marginTop: '30px'}}>Alterra News</h1>
                <br/>
                <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    <Search handleChange={this.handleChange}/>
                    <br/><br/>
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

export default Blog;