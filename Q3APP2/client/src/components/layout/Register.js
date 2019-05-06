import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import img from '../../img/Q3+Partners_1.png'
import { withProvider } from '../../context'

class Register extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        const login = login
      this.props.registerUser(newUser).then(() => this.props.history.push('/'))
    }

    

  render() {
    return (
      <div className="register">
        <div className="banner mx-auto justify-content-center">
        <div style={{width: '500px', height: '300px'}}>
        <img src={img} alt="" className="img-fluid"></img>
        </div>
        </div>
        <div className="d-flex justify-content-center">
        <div className="rgcontainer d-flex justify-content-center">
            <form onSubmit={this.onSubmit}>
                <div className="container">
                <div className="d-inline-block form-group mt-2 mr-4">
                <label className="d-block">Firstname</label>
                <input className="form-control" name="firstName" value={this.state.firstName} style={{width: '200px', height: '40px'}} onChange={this.onChange}></input>
                </div>
                <div className="d-inline-block form-group mt-2">
                <label className="d-block">Lastname</label>
                <input className="form-control" name="lastName" value={this.state.lastName} style={{width: '200px', height: '40px'}} onChange={this.onChange}></input>
                </div>
                <div className="form-group">
                    <label className="d-block">Email</label>
                    <input className="form-control" name="email" value={this.state.email} style={{width: '420px', height: '40px'}} onChange={this.onChange}></input>
                </div>
                <div className="form-group">
                    <label className="d-block">Password</label>
                    <input type="password" className="form-control" name="password" value={this.state.password} style={{width: '420px', height: '40px'}} onChange={this.onChange}></input>
                </div>
                <div className="form-group">
                    <label className="d-block">Confirm Password</label>
                    <input type="password" className="form-control" name="password2" value={this.state.password2} style={{width: '420px', height: '40px'}} onChange={this.onChange}></input>
                </div>
                <button className="mt-3 btn btn-block btn-outline-dark">Register</button>
                </div>
            </form>
            
        </div>
        </div>
      </div>
    )
  }
}


export default withRouter(withProvider(Register))