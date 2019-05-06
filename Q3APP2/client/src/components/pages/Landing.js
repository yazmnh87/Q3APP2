import React, { Component } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Lanbackground">
            <div>
            <h2>Welcome!</h2>    
            </div> 
            <div className="d-flex flex-column">
            <div className="ml-3">       
            <Link to="/question"><button className="btn btn-lg btn-outline-dark">Create New Survey</button></Link>
            </div> 
            <div className="survcontainer">

            </div>
            </div>
            <div className="ml-3 align-bottom">
            <button className="btn btn-lg btn-outline-dark">View Previous Surveys</button>
            </div>
            </div>
      </div>
    )
  }
}

export default Landing