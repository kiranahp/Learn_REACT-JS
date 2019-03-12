import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../Style/Blog.css';
import '../Style/bootstrap.min.css';

const BlogContent = props => {
    return (
        // <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"/>
        <div class='row'>
            <div class="well">
                <div class="media">
                	<a class="pull-left" href="#">
    		            <img class="media-object" src={props.img}/>
  		            </a>
  		            <div class="media-body">
    		            <h4 class="media-heading">{props.title}</h4>
                        <p class="text-right">{props.author}</p>
                        <p>{props.content}</p>
                        {/* <ul class="list-inline list-unstyled">
                            <li>
                            <span><i class="fa fa-facebook-square"></i></span>
                            <span><i class="fa fa-twitter-square"></i></span>
                            <span><i class="fa fa-google-plus-square"></i></span>
                            </li>
                            </ul> */}
                    </div>
                </div>
            </div>
            </div>
    );
  };

BlogContent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string,
    author: PropTypes.string.isRequired,
};

export default BlogContent;
