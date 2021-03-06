import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Interest from '../components/interest';
import Projects from '../components/myprojects';
import Colaborate from '../components/colaborate';
import Timeline_Arrow from '../assets/timeline_arrow.svg';
import { base } from '../base';
import Blogsection from '../components/blogsection';

class Homepage extends Component {
    state={
        theposition:"",
        showPointer: false,
        projects: []
    }

    componentDidMount= async()=> {
        window.addEventListener('scroll', this.listenToScroll);
        const project= await axios.get(base + '/api/project');
        this.setState({projects:project.data});
      }
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
      
      listenToScroll = () => {
        if(window.pageYOffset < 400){
            this.setState({ showPointer:false });
        }
        if(window.pageYOffset > 400){
            this.setState({ showPointer:true });
        }
      }
        
    render() {
        return (
            <div className="background_">
                <div >
                    <Navbar />
                    <div className="home_wrapper">
                        <div className="intro_wrapper">
                            <h1 className="intro_text">Hey there!</h1>
                            <h1 className="intro_text">I am Naman</h1>
                        </div>
                        <div className="desig_wrapper">
                            <h1 className="desig_text">UI/UX developer</h1>
                        </div>

                    </div>
                </div>
               {this.state.showPointer && <div>
                    {/* {window.pageYOffset<2200 &&<img src={Timeline_Arrow} className="timeline-arrow" />} */}
                    <img src={Timeline_Arrow} className="timeline-arrow" />
                </div>}
                <div className="timeline-bg mb-5">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                       <Interest /> 
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                       <Projects projects={this.state.projects}/> 
                    </div>
                    <div id="collaborate" className="d-flex flex-column justify-content-center align-items-center mt-5">
                       <Colaborate /> 
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                       <Blogsection /> 
                    </div>
                </div>
                    <div style={{zIndex:"200"}}>
                          <Footer/>
                    </div>         
                
            </div>
        );
    }
}

export default Homepage;