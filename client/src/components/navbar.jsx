import React, { Component } from 'react';
import Navicon from '../assets/N.svg';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {
        width: '-300px'
    }
    render() {
        return (
            <div className="navbar__container container-fluid p-0">
                <nav className={"navbar navbar-expand-lg "}>
                    <div className="navbar-brand" style={{color:"#393939"}}>
                    <img className="img img-fluid nav_icon" src={Navicon} alt="Navbar Icon"/>
                    </div>
                    <button className="ml-auto pr-0 navbar-toggler collapsed" type="button" 
                        data-toggle="collapse" 
                        data-target="#landingpagenavbar"
                        aria-controls="landingpagenavbar" aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="icon-bar top-bar" ></span>
                        <span className="icon-bar middle-bar" ></span>
                        <span className="icon-bar bottom-bar" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="landingpagenavbar">
                        <div className="navbar-nav ml-auto align-items-center">
                            <a href="/#collaborate" className="p-2" style={{color:"#B5B5B5", textDecoration:"none", fontFamily:"$font-1"}}><div className="nav-links">collaborate</div></a>
                            <a href="https://github.com/np453" className="p-2" style={{color:"#B5B5B5", textDecoration:"none", fontFamily:"$font-1"}}><div className="nav-links">github</div></a>
                        </div>
                    </div>
                    
                </nav>
            </div>
        );
    }
}

export default Navbar;