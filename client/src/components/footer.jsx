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
     mygitlink= "https://github.com/np453";
     myinsta="https://www.instagram.com/naman_072/";
     mylinkedin="https://www.linkedin.com/in/naman-patel-a9b260176/";
     myfb="https://www.facebook.com/npns99";
    render() {
      
        return (
            <div className="container-fluid footer_wrapper">
                    <div className="row">
                         <div className="col-md-4 dsg_wrapper">
                            
                            <h1 className="name_text ">Naman Patel</h1>
                            <h3 className="clg_name">B.Tech, Motilal Nehru National Institute of Technology Allahabad </h3>
                            <img src={sign} className="img-fluid sign_img" />

                         </div>
                         <div className="col-md-6 d-flex flex-column links_wrapper">

                             <div className="row">
                                <div className="col-md-8 d-flex flex-row">
                                  <h4>Mail to:</h4>
                                  <a  href={"mailto:" + this.mymail}>
                                  <img src={gmail} className="pl-4 pr-4 mail_img"  /></a>
                                  <a  href={"mailto:" + this.mymail} className="A_link_name A_mail_name">
                                  <h3>{this.mymail}</h3>
                                  </a>
                                </div>  
                                <div className="col-md-4 d-flex flex-row align-items-center">
                                  <img src={github} className="git_image pr-4"/>
                                  <a  className="A_link_name" href={this.mygitlink}>
                                  <h3 className="git_name">{this.mygit}</h3></a>
                                </div>
                             </div>  
                             <div className=" follow_section d-flex flex-row justify-content-start align-items-center">
                                  <h3 className="A_follow">Follow me on</h3>
                                  <a  className="A_link_name" href={this.mylinkedin}>
                                  <img src={linkedin} className="pl-4 pr-4"/>
                                  </a>
                                  <a  className="A_link_name" href={this.myfb}>
                                  <img src={fb} className="pl-4 pr-4"/>
                                  </a>
                                  <a  className="A_link_name" href={this.myinsta}>
                                  <img src={insta} className="pl-4 pr-4"/>
                                  </a>
                             </div>  
                         </div>
                    </div>
            </div>
        )
    }
}
