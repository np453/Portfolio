import React, { Component } from 'react';
import axios from 'axios';
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
        const blog= await axios.get(base + '/api/blog');
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
        return (
            <div className="background_">
                <div>
                    <Navbar />
                    <div className="container-fluid blog-topsection-wrapper">
                        <h1 className="blog-title">Blog</h1>
                    </div>
                    <div>
                        {/* {window.pageYOffset<2200 &&<img src={Timeline_Arrow} className="timeline-arrow" />} */}
                        <img src={Timeline_Arrow} className="timeline-arrow" />
                    </div>
                    <div className="blog_list_wrapper">
                        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                            <Eachblog />
                            <Eachblog />
                            <Eachblog />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Blog;