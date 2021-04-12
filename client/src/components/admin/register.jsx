import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { base } from '../../base'

class Register extends Component {
    state={
        data:{
            email:"",
            password:""
        },
        redirect:false
    }
    // handle submit for admin register
    handlesubmit = async(e) => {
        e.preventDefault();
        const payload = {
            email:this.state.data.email,
            password:this.state.data.password
        }
        const {data} = await axios.post(base + '/api/auth/register',payload);
        // console.log(data)
        this.setState({redirect:true})
    }

    // onchange handler for input feilds
    handleInputChange = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data });
    };
    render() {
        // redirecting post login
        if(this.state.redirect) {
            return <Redirect to="/admin_login"/>
        }
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center container-fluid p-0">
                <div className="col-md-4">
                <h3>Admin Register</h3>
                <form className="border rounded p-3 d-flex flex-column" onSubmit={this.handlesubmit}>
                                <div className="form-group">
                                <label className="text-black" for="email">email</label>
                                <input className="form-control"  id="email" name="email" type="text" onChange={this.handleInputChange} value={this.state.data.email}/>
                                </div>
                                <div className="form-group">
                                <label className="text-black" for="pass">password</label>
                                <input className="form-control"  name="password" id="pass" type="password" onChange={this.handleInputChange} value={this.state.data.password}/>
                                </div>
                                <button className="mt-3 btn btn-primary">Register</button>
                                <Link style={{textDecoration:"none"}} to="/"><p className="mt-4 text-success">Back to home</p></Link>
                                <Link style={{textDecoration:"none"}} to="/admin_login"><p className="mt-1 text-success">Login</p></Link>
                </form>
            </div>
            </div>
        );
    }
}

export default Register;