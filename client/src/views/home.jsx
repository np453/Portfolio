import React, { Component } from 'react';
import Navbar from '../components/navbar';

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
                <div className="row m-0">
                    <div className="col-md-3">
                        <div className="container timeline_wrapper">
                            <div className="timeline-container"></div>
                        </div>

                    </div>
                    <div className="col-md-9">

                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;