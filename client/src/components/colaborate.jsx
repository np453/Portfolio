import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Colaborate extends Component {
    render() {
        const email= "namanpatel453@gmail.com";
        return (
            <div className="card_wrapper_y">
                <div className="card_main_body">
                    <div className="d-flex flex-column justify-content-center align-items-center colab_body">
                        <h1 className="colaborate-title">Get your work done without any hasle</h1>
                        <h5 className="colaborate-teaser">Why think small ??   .   Why work offline ??   .   Why maintain paper resume ??</h5>
                        <h3 className="colaborate-label">Give it a Thought</h3>
                        <Button variant="contained" className="colaborate-button">Send me a Mail</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Colaborate;