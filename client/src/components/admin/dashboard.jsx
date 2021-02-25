import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    state={
        show:[],
        data:{
            ProjectName:"",
            projectgithub:"",
            ProjectDescription:"",
            external:"",
            file:null
        },
        showapi:false
    }

    handleRadio = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        if(input.name === 'file')data[input.name] = input.files[0]
        this.setState({ data });
    };

    onClickHandlerProject= async() =>{
        const data = new FormData() 
              
        data.append('name', this.state.data.speakerName)
        data.append('github', this.state.data.projectgithub)
        data.append('link', this.state.data.external)
        data.append('description', this.state.data.ProjectDescription)
        data.append('file', this.state.data.file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
      axios.post("/api/project", data, config)
        .then(res => { // then print response status
          console.log('upload success')
        })
        .catch(err => { // then print response status
            console.log('upload fail')
        })
    }

    handleclick_getapi=async(route)=>{
        const data= await axios.get(`/api/${route}/`);
        
        this.setState({show:data.data, showApi:true});
        
    }

    handledelete=async(id,route)=>{
        await axios.put(`/api/${route}/delete/${id}`);
        const data = axios.get(`/${route}`);
        }

        loadForms = () => {
            this.setState({ showApi:false })
        }

    render() {
        const el = this.state.showapi === true ?
                <div className="container">
                <div className="row">
                <ul className="list-group m-3">
                    {this.state.show.map(m=>
                        <li className="list-group-item">
                            <span>{m.name != undefined ? m.name : (m.title != undefined ? m.title : m.filename )}</span>
                            <button className="ml-2 btn btn-danger  " onClick={()=>this.handledelete(m._id,m.route)}>Delete</button>
                        </li>
                    )}
                </ul>
            </div>
            <button onClick={this.loadForms} className="btn m-3 btn-info">Back to forms</button>
            </div>
    :
    <div className="row">
        <div className="col m-2 border rounded p-3">

           {/*Project api form */}
           <div className="container">
                    <h3 className="text-center p-3">Project api</h3>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="form-group files">
                            <div className="form-group">
                            <label style={{width:"95px"}} className="p-2" for="ProjectName">Name</label>
                            <input type="text" name="ProjectName" onChange={this.handleRadio}/>
                            </div>
                            <div className="form-group">
                            <label style={{width:"95px"}} className="p-2" for="projectgithub">Github</label>
                            <input type="text" name="projectgithub" onChange={this.handleRadio}/>
                            </div>
                            <div className="form-group">
                            <label style={{width:"95px"}} className="p-2" for="external">External Link</label>
                            <input type="text" name="external" onChange={this.handleRadio}/>
                            </div>
                            <div className="form-group">
                            <label style={{width:"95px"}} className="p-2" for="ProjectDescription">Description</label>
                            <input type="text" name="ProjectDescription" onChange={this.handleRadio}/>
                            </div>
                            <label className="p-2 border rounded" for="file">
                                <svg className="file_upload_button" width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.9218 8.71697C26.373 2.54679 20.1156 -1.19951 13.9454 0.34935C9.12353 1.55979 5.62233 5.72723 5.26159 10.6855C1.83788 11.2501 -0.479912 14.4833 0.0846966 17.907C0.586607 20.9507 3.22398 23.1798 6.30874 23.1675H11.5445V21.0732H6.30874C3.99546 21.0732 2.12015 19.1979 2.12015 16.8846C2.12015 14.5714 3.99546 12.6961 6.30874 12.6961C6.88709 12.6961 7.35588 12.2273 7.35588 11.6489C7.35065 6.444 11.5659 2.22034 16.7708 2.21517C21.2764 2.21065 25.155 5.39594 26.0265 9.8164C26.1126 10.2578 26.4708 10.595 26.9166 10.6541C29.7793 11.0618 31.7695 13.713 31.3619 16.5757C30.9959 19.1463 28.8011 21.0603 26.2045 21.0732H22.0159V23.1675H26.2045C30.2528 23.1553 33.5246 19.8636 33.5123 15.8153C33.5021 12.4455 31.1955 9.51666 27.9218 8.71697Z" fill="#686868"/>
                                    <path d="M16.0362 12.9998L11.8477 17.1884L13.3241 18.6649L15.7326 16.2669V26.3091H17.8269V16.2669L20.2248 18.6649L21.7013 17.1884L17.5127 12.9998C17.1043 12.5938 16.4447 12.5938 16.0362 12.9998Z" fill="#686868"/>
                                </svg>
                                <span className="m-2">Upload Project Photo</span>
                            </label>
                            <input name="file" id="file" type="file" className="form-control" onChange={this.handleRadio}/>
                        </div>  
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandlerProject}>Upload</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        return (
            <div className="admin_dashboard container-fluid p-0 bg-white">
            <div className="container">
            <div className="row">
                <div className="col-md-2 mt-3 p-0 api_list">
                    <h3 className="text-center">API</h3>
                    {/* List displaying Api Including delete feature */}
                    <ul className="admin_dashboard_api_list list-group">
                        <li onClick={()=>this.handleClick_getapi("project")} className="list-group-item ">Projects</li>
                        
                    </ul>
                    <Link style={{ color:"black", textDecoration:"none" }} to="/">Back to Home</Link>
                </div>
                {/* displaying element */}
                
                <div className="col-md-10">
                    {el}
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;