import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img from '../img/Q3+Partners_1.png'

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
        <div className="navcontainer">
            <div className="navlinkcont"><Link className="navbar-brand" to="/"><img className="img2" src={img} alt=""></img></Link></div>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/landing"><i className="fas fa-home fa-2x mr-3"></i></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/"><i className="fas fa-user fa-2x mr-3"></i></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/"><i className="fas fa-cog fa-2x mr-3"></i></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
  }
}

export default Navbar