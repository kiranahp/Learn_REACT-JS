import React, { Component } from 'react';
import '../Style/Blog.css';
import '../Style/bootstrap.min.css';

class BlogContent extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"/>
        <div class="container">
        <div class='row' style={{marginTop:'50px'}}>
        <div class='col-9'>
            <div class="well">
                <div class="media">
                	<a class="pull-left" href="#">
    		            <img class="media-object" src={require("../img/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg")}/>
  		            </a>
  		            <div class="media-body">
    		            <h4 class="media-heading">Judul 1</h4>
                        <p class="text-right">By Kirana</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
                dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
                Aliquam in felis sit amet augue.</p>
                        <ul class="list-inline list-unstyled">
                            <li><span><i class="glyphicon glyphicon-calendar"></i> 2 days, 8 hours </span></li>
                            <li>|</li>
                            <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span>
                            <li>|</li>
                            <li>
                            <span class="glyphicon glyphicon-star"></span>
                                        <span class="glyphicon glyphicon-star"></span>
                                        <span class="glyphicon glyphicon-star"></span>
                                        <span class="glyphicon glyphicon-star"></span>
                                        <span class="glyphicon glyphicon-star-empty"></span>
                            </li>
                            <li>|</li>
                            <li>
                            <span><i class="fa fa-facebook-square"></i></span>
                            <span><i class="fa fa-twitter-square"></i></span>
                            <span><i class="fa fa-google-plus-square"></i></span>
                            </li>
                            </ul>
                    </div>
                </div>
            </div>
            <div class="well">
                <div class="media">
                    <a class="pull-left" href="#">
                        <img class="media-object" src={require("../img/img/exp-gallery/phil-desforges-1322844-unsplash.jpg")}/>
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading">Judul 2</h4>
                    <p class="text-right">By Kirana</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
            Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
            dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
            Aliquam in felis sit amet augue.</p>
                    <ul class="list-inline list-unstyled">
                        <li><span><i class="glyphicon glyphicon-calendar"></i> 2 days, 8 hours </span></li>
                        <li>|</li>
                        <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span>
                        <li>|</li>
                        <li>
                        <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star-empty"></span>
                        </li>
                        <li>|</li>
                        <li>
                        <span><i class="fa fa-facebook-square"></i></span>
                        <span><i class="fa fa-twitter-square"></i></span>
                        <span><i class="fa fa-google-plus-square"></i></span>
                        </li>
                        </ul>
                </div>
                </div>
            </div>
            </div>
            <div class="col-3" style={{left: '70px'}}>
                <div class="well">
                    <h4><i class="fa fa-search"></i> Blog Search...</h4>
                    <div class="input-group">
                        <input type="text" class="form-control"/>
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="well">
                    <h4 style={{marginTop: '100px'}}><i class="fa fa-fire"></i> Popular Posts:</h4>
					<ul>
                    <li><a href="">WPF vs. Windows Forms-Which is better?</a></li>
					<li><a href="">How to create responsive website with Bootstrap?</a></li>
					<li><a href="">The best Joomla! templates 2014</a></li>
					<li><a href="">ASP .NET cms list</a></li>
			        <li><a href="">C# Hello, World! program</a></li>
					<li><a href="">Java random generator</a></li>
					</ul>
                </div>
            </div>
            </div>
            </div>
      </div>
    );
  }
}

export default BlogContent;
