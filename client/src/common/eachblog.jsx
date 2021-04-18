import React, { Component } from 'react';

class Eachblog extends Component {
    render() {
        return (
            <div className="blog_wrapper">
                <div className="blog_inner_wrapper">
                        <h1 className="blog_title">Blog Title</h1>
                        <h5 className="blog_author" >Author</h5>
                        <div className="col-md-4 blog_image_wrapper">
                            <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" className="blog_image img-fluid" />
                        </div>
                        <div className="col-md-8 blog_content_wrapper">
                            <h3 className="blog_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </h3>  
                        </div>
                
                    
                </div> 
                
            </div>
        );
    }
}

export default Eachblog;