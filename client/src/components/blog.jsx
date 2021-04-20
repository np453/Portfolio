import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { base } from '../base';
import Timeline_Arrow from '../assets/timeline_arrow.svg';
import Footer from './footer';
import Navbar from './navbar';
import Eachblog from '../common/eachblog';


class Blog extends Component {
    state={
        theposition:"",
        showPointer: false,
        blogs:[]
    }
    componentDidMount= async()=> {
        window.addEventListener('scroll', this.listenToScroll);
        const blog= await axios.get(base + '/api/blog/post/');
        this.setState({blogs:blog.data});
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
      
      listenToScroll = () => {
        if(window.pageYOffset < 0){
            this.setState({ showPointer:false });
        }
        if(window.pageYOffset > 0){
            this.setState({ showPointer:true });
        }
      }
    render() {
        const blogs = this.state.blogs===undefined ? [] : this.state.blogs;
        return (
            <div className="background_">
                <div>
                    <Navbar />
                    <div className="container-fluid blog-topsection-wrapper">
                        <h1 className="blog-title mb-4">Wall of the Untold</h1>
                        <div className="button_wrapper_blog_section">
                            <Link to="/editor"><button class="custom-btn-blog_section btn-7"><span>Write a Story </span></button></Link>
                            <Link to="/"><button class="custom-btn-blog_section btn-7 ml-4"><span>Back to Home</span></button></Link>
                        </div>
                        
                    </div>
                    <div>
                        {/* {window.pageYOffset<2200 &&<img src={Timeline_Arrow} className="timeline-arrow" />} */}
                        <img src={Timeline_Arrow} className="timeline-arrow" />
                    </div>
                    <div className="blog_list_wrapper">
                        <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                            {blogs.reverse().map(m=>(
                                <Eachblog title={m.title} name={m.name} content={m.content} date={m.date} />
                            ))}
                            
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Blog;