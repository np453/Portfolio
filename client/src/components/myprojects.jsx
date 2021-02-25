import React, { Component } from 'react'
import gitlink_img from '../assets/gitlink_img.svg'
import weblink_img from '../assets/weblink_img.svg'
import { base } from '../base'

export default class Myprojects extends Component {
    state={
       works: [
        { title: "Gear's On",
          description: "Developed a fully responsive website constructed on ‘MERN’ Stack concepts with embedded Gear solver for performing Gearbox optimizations and shaft calculations.",
          gitlink: "",
          weblink:" ",
          filename:"1614241786296-gearson.png",
          route:"project"
    },
    { title: "Gear's On",
          description: "Developed a fully responsive website constructed on ‘MERN’ Stack concepts with embedded Gear solver for performing Gearbox optimizations and shaft calculations.",
          gitlink: "",
          weblink:" ",
          filename:"1614241786296-gearson.png",
          route:"project"
    },
    { title: "Gear's On",
          description: "Developed a fully responsive website constructed on ‘MERN’ Stack concepts with embedded Gear solver for performing Gearbox optimizations and shaft calculations.",
          gitlink: "",
          weblink:" ",
          filename:"1614241786296-gearson.png",
          route:"project"
    },
    ]}


    render() {
        return (
            <div className="project_wrapper">
                <div className="project_card d-flex flex-column justify-content-center">
                   <h1 className="project_card_title text-center">My not so innovative projects</h1>
                   <h4 className="project_card_title text-center mb-2" >But yet interesting</h4>
                  {this.state.works.map( project => (
                    <div className="row mt-3 pr-3 mb-5">
                        <div className="col-md-4">
                           <img src={base + "/media/" + project.route + "/" + project.filename} className="img-fluid p-3 project-img" />
                        </div>
                        <div className="col-md-8">
                           <h3 className="project_title">{project.title}</h3> 
                           <h4 className="project_desc">{project.description}</h4>  
                           <div className="d-flex flex-row justify-content-between w-50">
                              <div className="d-flex">
                               <img src={gitlink_img} />
                               <a href={project.githublink} className="link_name">Github</a>
                              </div>
                              <div className="d-flex"> 
                               <img src={weblink_img} />
                               <a href={project.link} className="link_name">Website link</a>
                              </div>
                           </div>
                        </div>
                    </div>
                  ))
                  }
                    {/* <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-8">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-8">

                        </div>
                    </div>     */}
            </div>
        </div>    
        )
    }
}