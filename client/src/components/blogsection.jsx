import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blogsection extends Component {
    render() {
        return (
            <div className="blog_section_outer_wrapper">
                <div className="blog_section_inner_wrapper">
                    <span className="blog_section_title">Wall of the Untold</span>
                    <span className="blog_section_elb">A place where anyone can drop their thoughts and open to others about their thought.
                    Not everyone is good writer why fear of being judged come forward and just express yourself</span>
                    <div className="blog_section_button_wrapper">
                        <Link to="/editor"><button className="custom-btn btn-3"><span>Write a Story </span></button></Link>
                        <Link to="/blog"><button className="custom-btn btn-3 blog_button_1"><span>Visit the Untold</span></button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blogsection;