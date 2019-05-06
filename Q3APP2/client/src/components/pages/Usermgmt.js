import React, { Component } from 'react'
import { withProvider } from '../../context'
import Navbar from '../Navbar'

class Usermgmt extends Component {
    state= {
        firstName: "",
        lastName: "",
        email: ""
    }


    componentDidMount(){
        this.props.getAllUsers()
        // displayUsers()
    }

   onChange = (e) => {
       this.setState({
        [e.target.name]: e.target.value
       })
   }

 

       
   

  render(props) {
    const users = this.props.allUsers.map(user => {
        return <>
                    <tr className="border border-lg">
                        <td>{user.firstName + " " + user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.date.slice(0,10)}</td>
                        <td>{user.permission}</td>
                        <button>Edit</button>
                        <button>Disable</button>
                        <button onClick={() => this.props.deleteUser(user._id)}>Delete</button>
                    </tr>
                </>
    })
    
    
    return (
      <>
        <Navbar/>
        <label>First Name</label>
        <input onChange={this.onChange} name="firstName" value={this.state.firstName}></input>
        <label>Last Name</label>
        <input onChange={this.onChange} name="lastName" value={this.state.lastName}></input>
        <label>Email</label>
        <input onChange={this.onChange} name="email" value={this.state.email}></input>
        <select>
            <option>Admin</option>
            <option>User</option>
        </select>
        <button onClick={""}>Add User</button>
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Date Created</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {users}
            </tbody>
        </table>
      </>
    )
  }
}


export default withProvider(Usermgmt)