import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Redirect, Link } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../footer';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { base } from '../../base';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Blogdashboard extends Component {
    state={
        blogs:[]
    }
    componentDidMount= async()=> {
        const blog = await axios.get(base + '/api/blog/');
        this.setState({blogs:blog.data});
    }
    handletoast = (msg)=> {toast.success(msg)}
    handledelete= async (id)=> {
        const data = await axios.get(base + `/api/blog/delete/${id}`);
           this.handletoast("Blog Deleted"); 
    }
    handleupdate = async (id)=> {
        const payload = {
            id:id,
            status:"posted"
        }
        const data = await axios.post(base + `/api/blog/updatestatus`,payload);
        this.handletoast("Blog Posted")
    }
    
    render() {
        if(Cookies.get("admintokenSSID")==undefined){
            return <Redirect to="/admin_login"></Redirect>
        }
        const blogs = this.state.blogs===undefined ? [] : this.state.blogs;
        return (
            <div>
                <Navbar /><ToastContainer />
                <div className="blogmanager_outer_wrapper">
                    <div className="heading_wrapper">
                        <div>
                            <Link to='/dashboard'><Button variant="contained" className="">Dashboard</Button></Link>
                        </div>
                        <h1 className="blog_dashboard_title">Blog Manager</h1>
                        <div>
                            <Link to='/blog'><Button variant="contained" className="">Blog Showcase</Button></Link>
                        </div>

                    </div>
                    <div className="blog_list_wrapper">
                        {blogs.map(blog => 
                            <div className="dashboard_blog_display">
                                <h2>{blog.title}</h2>
                                <h5>{blog.name}</h5>
                                <h5>{blog.email}</h5>
                                <div dangerouslySetInnerHTML={{ __html: blog.content }}  className="html_blog_content"></div>
                            <div className="button_wrapper">
                               {blog.admincheck=='pending' && <Button onClick={()=>this.handleupdate(blog._id)} variant="contained" className="" >Post</Button>}
                                <Button onClick={()=>this.handledelete(blog._id)} variant="contained" className="delete_blog">Delete</Button>
                                
                            </div>
                            </div>
                            )}
                        
                    </div>
                </div>
                <Footer />
                
            </div>
        );
    }
}

export default Blogdashboard;