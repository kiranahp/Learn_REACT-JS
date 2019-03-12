import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../Style/Blog.css';
import '../Style/bootstrap.min.css';

const PopularNews = props => {
    return (
      <div className="App">
        <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"/>
                <div class="well">
                    <h5 style={{marginTop: '30px', marginLeft:'40px'}}><i class="fa fa-fire"></i> Popular News:</h5>
					<ul>
					<li>{props.title}</li>
					</ul>
                </div>
            </div>
    );
}

PopularNews.propTypes = {
  title: PropTypes.string.isRequired
};

export default PopularNews;
