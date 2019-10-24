import React, { Component } from "react"
import './style.css'
import axios from "axios"
import ClipLoader from 'react-spinners/ClipLoader'

class NumberOfPledges extends Component {
  state = {
    details: [],
    allPledges: []
  }
  componentDidMount = () => {
    const userId = 1
    axios.get(`/api/dashboard_number_of_pledges/${userId}`).then(({ data }) => {
      this.setState(
        { details: data })
    })
    axios.get('/api/dashboard_number_of_all_pledges').then(({ data }) => {
      this.setState(
        { allPledges: data })
    })
  }

  render() {
    const { data } = this.state.details
    const { allPledges } = this.state.allPledges
    return (
      <div className="container-div">
        <div className="container-div__dashboard" ><h1 className="container-div__dashboard-title">Action Dashboard</h1></div>

        {!data ? (
          <div >
            <ClipLoader
              sizeUnit={"px"}
              size={15}
              color={'#FFF'}
            />
          </div>
        ) :
          (
            <div className="container-div__number-of-Pledges">
              {!allPledges ? <h1>loading</h1> : (<div >{data.length}/{allPledges.length}<p className="container-div__number-of-Pledges-pledges">PLEDGES</p></div>)}
            </div>
          )
        }
      </div >
    )
  }
}

export default NumberOfPledges
