import React, { Component } from 'react'
import Navbar from '../../Navbar'
import { withProvider } from '../../../context'
// import { withRouter } from 'react-router-dom'

class Question1 extends Component {
state = {
  counter: 0,
  response: {
    resval: 5,
    questionId: ""
    
  }
}

resval = (e) => {
  const { value } = e.target
  this.setState(prevState => {
    return {
      response: { 
        ...prevState.response,
        resval: value 
      }
    }
  })
}

resetResVal = () => {
  console.log('running')
  this.setState({
    response: {
      resval: 5
    }
  }, console.log(this.state.response.resval))
}

counter = () => {

  console.log("hello")
  console.log(this.props.questions[this.state.counter]._id)
  this.setState(prevState => ({
    counter: prevState.counter + 1,
    response: {
      ...prevState.response,
      questionId: this.props.questions[prevState.counter]._id
    }
    
  }), () => {
    
    this.props.nextQSet(this.state.response, () => this.resetResVal())
  })
}

// prevQSet = () => {
//   if(this.state.counter === )  
// }

finishSurv = () => {

  console.log("finished")
  this.setState(prevState => ({
    counter: prevState.counter,
    response: {
      ...prevState.response,
      questionId: this.props.questions[prevState.counter]._id
    }
  }), () => {
    this.props.nextQSet(this.state.response, () => this.props.history.push("/final"))
    
  })
}

counterdec = () => {

  console.log("hello")
  this.setState(prevState => ({
    counter: prevState.counter - 1,
    response: {
      questionnum: this.props.questions[this.state.counter].questionnumber
    }
  }))
}

  render(props) {


    
    return (
      <React.Fragment>
      <Navbar />
      <div className="Lanbackground">
     { (() => {
       if(this.state.counter === 0){  
          return (
              <div className="d-flex justify-content-center">
                <button className="btn btn-lg mr-4" onClick={this.counter}>Next</button>
              </div> 
          )
      } else if (this.state.counter < 11){
        return (
          <>
            <div className="d-flex justify-content-end">
            <button className="btn btn-lg mr-4" onClick={this.counter}>Next</button>
            </div>
            <div className="d-flex justify-content-start">
            <button className="btn btn-lg mr-4" onClick={this.counterdec}>Previous</button>
            </div> 
          </>
        ) 
      } else {
        return (
          <>
          <div className="d-flex justify-content-start">
            <button className="btn btn-lg mr-4" onClick={this.counterdec}>Previous</button>
          </div>
          <div className="d-flex justify-content-end">
          <button className="btn btn-lg mr-4" onClick={this.finishSurv}>Finish</button>
          </div>
          </>
        )
     }
    })()}
    <span>Question {this.state.counter + 1} of 12</span>
    </div>
    <div>
        <p>{this.props.questions[0] !== undefined ? this.props.questions[this.state.counter].question : null}</p>
    </div>
    <div className="form-group inputrgsz">
      <input 
        type="range" 
        min="1" 
        max="10" 
        value={this.state.response.resval} 
        className="form-control-range rgcolor" 
        onChange={this.resval}>
      </input>
    </div>
  </React.Fragment>
    )
  }
}


export default withProvider(Question1)