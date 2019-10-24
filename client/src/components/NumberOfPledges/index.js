import React, { Component } from "react"
import './style.css'
import axios from "axios"

class NumberOfPledges extends Component {
  state = {
    details: [],
    allPledges: [],
    serverError: ""
  }
  componentDidMount = () => {
    const userId = 1
    axios.get(`/api/dashboard_number_of_pledges/${userId}`).then(({ data }) => {
      this.setState(
        { details: data })
    })
      .catch(error => {
        this.setState({ serverError: error.response.data.message })
      })
    axios.get('/api/dashboard_number_of_all_pledges').then(({ data }) => {
      this.setState(
        { allPledges: data })
    })
      .catch(error => {
        this.setState({ serverError: error.response.data.message })
      })
  }

  render() {
    const { data } = this.state.details
    const { allPledges } = this.state.allPledges
    const { serverError } = this.state
    return (
      <div className="container-div">
        <div className="container-div__dashboard" >
          <h1 className="container-div__dashboard-title">Action Dashboard</h1></div>
        {serverError !== "" ? <h1>{serverError}</h1> :
          (<>
            {!data ? (
              <h2>Loading</h2>
            ) :
              (
                <div className="container-div__number-of-Pledges">
                  {!allPledges ? <h1>loading</h1> : (<div >{data.length}/{allPledges.length}<p className="container-div__number-of-Pledges-pledges">PLEDGES</p></div>)}
                </div>
              )
            }
          </>)}
      </div >
    )
  }
}

export default NumberOfPledges
