import React, { Component } from 'react';
import '../Style/Blog.css';
import '../Style/bootstrap.min.css';

class Search extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"/>
            <div class="row" style={{marginLeft:'40px'}}>
                <div class="well">
                    <h5><i class="fa fa-search"></i> News Search</h5>
                    <div class="input-group">
                        <input type="text" class="form-control"/>
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Search;
