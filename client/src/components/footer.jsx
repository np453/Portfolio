import React, { Component } from 'react'
import sign from '../assets/signature_stamp.svg'
import gmail from '../assets/gmail.svg'
import github from '../assets/github.svg'
import insta from '../assets/insta.svg'
import linkedin from '../assets/linkedin.svg'
import fb from '../assets/fb.svg'




export default class footer extends Component {
     mymail= "namanpatel453@gmail.com";
     mygit= "np453";
    render() {
        return (
            <div className="container-fluid footer_wrapper">
                    <div className="row">
                         <div className="col-md-4 dsg_wrapper">
                            
                            <h1 className="name_text ">Naman Patel</h1>
                            <h3 className="clg_name">B.Tech, Motilal Nehru National Institute of Technology Allahabad </h3>
                            <img src={sign} className="img-fluid sign_img" />

                         </div>
                         <div className="col-md-8 d-flex flex-column links_wrapper">

                             <div className="d-flex justify-content-between ">
                                <div className="col-md-8 d-flex flex-row">
                                  <h4>Mail to:</h4>
                                  <img src={gmail} className="pl-4 pr-4 mail_img"  />
                                  <h3>{this.mymail}</h3>
                                </div>  
                                <div className="col-md-4 d-flex flex-row ">
                                  <img src={github} className="git_image pr-4"/>
                                  <h3>{this.mygit}</h3>
                                </div>
                             </div>  
                             <div className=" follow_section">
                                  <h3>Follow me on</h3>
                                  <img src={linkedin} className="pl-4 pr-4"/>
                                  <img src={fb} className="pl-4 pr-4"/>
                                  <img src={insta} className="pl-4 pr-4"/>
                             </div>  
                         </div>
                    </div>
            </div>
        )
    }
}
