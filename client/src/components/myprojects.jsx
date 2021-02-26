import React, { Component } from 'react'
import gitlink_img from '../assets/gitlink_img.svg'
import weblink_img from '../assets/weblink_img.svg'
import { base } from '../base'

export default class Myprojects extends Component { 
    render() {
        
        const projects = this.props.projects === undefined ? []:this.props.projects;
        
        return (
            <div className="project_wrapper">
                <div className="project_card d-flex flex-column justify-content-center">
                   <h1 className="project_card_title text-center">My not so innovative projects</h1>
                   <h4 className="project_card_title text-center mb-2" >But yet interesting</h4>
                  {projects.map( project => (
                    <div className="row mt-5 pr-3 mb-5">
                        <div className="col-md-4 d-flex justify-content-center">
                           <img src={base + "/media/" + project.route + "/" + project.filename} className="img-fluid p-3 project-img" />
                        </div>
                        <div className="col-md-8">
                           <h3 className="project_title">{project.name}</h3> 
                           <h4 className="project_desc">{project.description}</h4>  
                           <div className="d-flex flex-row justify-content-between w-50">
                              <div className="d-flex">
                               <img src={gitlink_img} />
                               <a href={project.githublink} className="link_name">Github</a>
                              </div>
                              <div className="d-flex"> 
                               <img src={weblink_img} />
                               <a href={"https://www." + project.link} className="link_name">Website link</a>
                              </div>
                           </div>
                        </div>
                    </div>
                  ))
                  }
            </div>
        </div>    
        )
    }
}
