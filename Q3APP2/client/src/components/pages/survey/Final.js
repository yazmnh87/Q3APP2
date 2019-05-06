import React, { Component } from 'react'
import Navbar from '../../Navbar'
import { withProvider } from '../../../context'
import {Radar} from 'react-chartjs-2'

class Final extends Component {
  state = {
        data:{
            labels: [],
            datasets: [
              {
                label: 'Student Survey Data',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: []
              }
            ]
          }
    ,
    responses: []

  }

  setGraphData = () => {
    this.setState({
      responses: this.props.responses
    }, () => this.setSurveyData())
  }

  setSurveyData = () => {
    console.log("running")
    console.log(this.state.responses)
    if(this.state.responses.length !== 0){
    this.setState(() => ({
            data: {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running', 'hello', 'wft', 'isthisworking', '11', '12'],
                datasets:[
                  {
                    label: 'Student Survey Data',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [this.state.responses[0].resval,
                    this.state.responses[1].resval,
                    this.state.responses[2].resval,
                    this.state.responses[3].resval,
                    this.state.responses[4].resval,
                    this.state.responses[5].resval,
                    this.state.responses[6].resval,
                    this.state.responses[7].resval,
                    this.state.responses[8].resval,
                    this.state.responses[9].resval,
                    this.state.responses[10].resval,
                    this.state.responses[11].resval]
                }]
              }
          }))}}

  componentDidMount(){
    this.setGraphData()
  }
  render() {

    return (
      <>
        <Navbar />
        <div className="Lanbackground">
    <div>
        <span>Thank you for taking a survey</span>
        <button>Logout</button>
    </div>
    <div className="graphContainer">
    {this.state.responses.length !== 0 ? <Radar data={this.state.data}/> : <span>No Survey Data to Display</span>}
    </div>
   </div>
   </>
    )
  }
}


export default withProvider(Final)