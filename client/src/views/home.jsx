import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Interest from '../components/interest';
import Colaborate from '../components/colaborate';

class Homepage extends Component {
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
                <div className="timeline-bg">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                       <Interest /> 
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                       <Colaborate /> 
                    </div>
                    
                </div>                   
                <Footer/>
            </div>
        );
    }
}

export default Homepage;