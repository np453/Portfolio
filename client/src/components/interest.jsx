import React, { Component } from 'react';
import Reactimg from '../assets/react.svg';
import Node from '../assets/node.svg';
import Figma from '../assets/figma.svg';

class Interest extends Component {
    render() {
        return (
            <div className="card_wrapper_y">
                <div className="card_main_body">
                    <h1 className="interest_title text-center">Topics Of Interest</h1>
                    <div className="skill_wrapper">
                        <div className="row skill-wrapper">
                            <img src={Reactimg} className="img img-fluid skill-img" />
                            <h4 className="description_text">
                            First hand experince in reactjs and worked a couple of website for the same.
                            </h4>
                        </div>
                        <div className="row skill-col-wrapper">
                            <div className="col-md-6 skill-wrapper">
                                <img src={Node} className="img img-fluid skill-img" />
                                <h4 className="description-col-text">
                                one of the development enviroment with great potential.
                                </h4>
                            </div>
                            <div className="col-md-6 skill-wrapper">
                                <img src={Figma} className="img img-fluid skill-img" />
                                <h4 className="description-col-text">
                                Prototyping is one of the major needs for mordern development.
                                </h4>
                            </div>
                        </div>
                        

                    </div>
                </div>
                
            </div>
        );
    }
}

export default Interest;