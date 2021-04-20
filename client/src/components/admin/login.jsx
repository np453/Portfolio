import axios from 'axios';
import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { base } from '../../base';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
    state={
        data:{
            email:"",
            password:""
        },
        id:"",
        redirect:false
    }

    // onclick handler for admin login
    handlesubmit=async(e)=>{
        e.preventDefault();
        const admindata={
            email:this.state.data.email,
            password:this.state.data.password
        }
        try{
            const {data} = await axios.post(base + '/api/auth/login',admindata);
            // this.setState({id:jwt_decode(data)._id})
            console.log(data)
            this.setState({id:data});
            Cookies.set('admintokenSSID',this.state.id, { expires: 1 });
            this.setState({redirect:true})
        }catch(e){
            toast.warning('Wrong Userid/Password try again or come later :)');
        }
        

    }

    // on change handler for input fields
    handleInputChange = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data });
    };
    render() {
        // redirecting to admin dashboard post login
        if(this.state.redirect) {
            
            return <Redirect to="/dashboard"/>
        }
        return (
            <div style={{backgroundColor:"#fff"}} className="vh-100 d-flex justify-content-center align-items-center container-fluid p-0">
                <ToastContainer />
                <div className="col-md-4">
                <h3>Admin login</h3>
                <form className="border rounded p-3 d-flex flex-column" onSubmit={this.handlesubmit}>
                                <div className="form-group">
                                <label className="text-black" for="email">email</label>
                                <input className="form-control"  id="email" name="email" type="text" onChange={this.handleInputChange} value={this.state.data.email}/>
                                </div>
                                <div className="form-group">
                                <label className="text-black" for="pass">password</label>
                                <input className="form-control"  name="password" id="pass" type="password" onChange={this.handleInputChange} value={this.state.data.password}/>
                                </div>
                                <button className="mt-3 btn btn-primary">Login</button>
                                <Link style={{textDecoration:"none"}} to="/"><p className="mt-4 text-success">Back to home</p></Link>
                </form>
                </div>
            </div>
        );
    }
}

export default Login;