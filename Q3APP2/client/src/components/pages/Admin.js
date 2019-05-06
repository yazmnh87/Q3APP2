import React, { Component } from 'react'
import { withProvider } from '../../context'
import Navbar from '../Navbar'
import Final from '../pages/survey/Final'
import {Radar} from 'react-chartjs-2'

class Admin extends Component {
    state = {
        chartData:{
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
        },
        currentUserResponse: [],
        show: false
    }

    onChange = (e) => {
        console.log(e.target.value)
        this.props.getUserSurveys(e.target.value)
        // this.surveryArr()

    }

    submitSurveyDate = (e) => {
        console.log(JSON.parse(e.target.value))
        const responseDat = JSON.parse(e.target.value)
        this.setState({
            currentUserResponse: responseDat
        },() => this.setSurveyData())
    
    }

    setSurveyData = () => {
        console.log(this.state.currentUserResponse)
        if(this.state.currentUserResponse.length !== 0){
        this.setState(() => ({
            chartData: {
                data: {
                    labels: [
                         this.state.currentUserResponse[0].questionId.questionsubcategory,
                         this.state.currentUserResponse[1].questionId.questionsubcategory,
                         this.state.currentUserResponse[2].questionId.questionsubcategory,
                         this.state.currentUserResponse[3].questionId.questionsubcategory,
                         this.state.currentUserResponse[4].questionId.questionsubcategory,
                         this.state.currentUserResponse[5].questionId.questionsubcategory,
                         this.state.currentUserResponse[6].questionId.questionsubcategory,
                         this.state.currentUserResponse[7].questionId.questionsubcategory,
                         this.state.currentUserResponse[8].questionId.questionsubcategory,
                         this.state.currentUserResponse[9].questionId.questionsubcategory,
                         this.state.currentUserResponse[10].questionId.questionsubcategory,
                         this.state.currentUserResponse[11].questionId.questionsubcategory

                    ],
                    datasets:
                        [{
                            label: 'Student Survey Data',
                        data: [this.state.currentUserResponse[0].resval,
                        this.state.currentUserResponse[1].resval,
                        this.state.currentUserResponse[2].resval,
                        this.state.currentUserResponse[3].resval,
                        this.state.currentUserResponse[4].resval,
                        this.state.currentUserResponse[5].resval,
                        this.state.currentUserResponse[6].resval,
                        this.state.currentUserResponse[7].resval,
                        this.state.currentUserResponse[8].resval,
                        this.state.currentUserResponse[9].resval,
                        this.state.currentUserResponse[10].resval,
                        this.state.currentUserResponse[11].resval]
                    }]
                }
            },
            show: true
        }))}

    }

    // renderGraph = () => {
    //     return <div>
    //         <radar data={props.userResponses.resval}/>
    //     </div>
    // }
  

  render() {
    const surveyArr = this.props.userResponses.map(survey => {
        return <option key={survey.response._id + Math.random().toString()} value={JSON.stringify(survey.response)}>{survey.date.slice(0,10)}</option>   
    })

    const userArr = this.props.users.map(user => {
        return <option key={user._id} value={user._id} >{user.firstName} {user.lastName}</option>
    })

    return (
        
      <>
        <Navbar />
        <select onChange={this.onChange}>
        <option></option>
            {userArr}
        </select>
        <select onChange={this.submitSurveyDate}> 
            <option>Date</option>
            {surveyArr}
        </select>
        {this.state.show ? <div className="graphContainer">
             <Radar data={this.state.chartData.data}/>
         </div> : null}
      </>
    )
  }
}


export default withProvider(Admin)