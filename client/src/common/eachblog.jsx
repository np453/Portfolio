import React, { Component } from 'react';

class Eachblog extends Component {
    render() {
        return (
            <div className="blog_wrapper">
                <div className="blog_inner_wrapper">
                        <h1 className="blog_title">{this.props.title}</h1>
                        <div className="author-wrapper">
                         <span className="blog_author" >{this.props.name}</span> 
                         <span className="blog_date" >{this.props.date}</span>   
                        </div>
                        
                        {/* <div className="col-md-4 blog_image_wrapper">
                            <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" className="blog_image img-fluid" />
                        </div> */}
                        <div className="blog_content_wrapper">
                            <div className="blog_content" dangerouslySetInnerHTML={{__html:this.props.content}}>
                            </div>  
                        </div>
                
                    
                </div> 
                
            </div>
        );
    }
}

export default Eachblog;