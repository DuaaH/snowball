import React from 'react'
import axios from 'axios'
import PledgeItem from './../PledgItem'
import BackButton from '../BackButton';
import Footer from '../Footer'
import './style.css'
import ClipLoader from 'react-spinners/ClipLoader'


class CategoryPledges extends React.Component {
  state = {
    pledge_info: [], // i used an array to store values of object cause its more difficult if i use each name or an object inside state object
    loading: true,
    details: {},
    serverError: ""
  };

  componentDidMount() {
    window.scrollTo(0, 0)
    const data = sessionStorage.getItem('results')
    const info = JSON.parse(data)
    this.setState({ details: info })
    axios.get(`/api/action-category/${info.category_id}`).then(Response => {
      const pledge_info = Response.data
      this.setState({ loading: false, pledge_info })
    }).catch(error => {
      this.setState({ serverError: "server error" })
    })
  }

  render() {
    const { pledge_info, serverError } = this.state
    const { details } = this.state

    return (
      <>
        {serverError !== "" ? <h1>{serverError}</h1> : (
          <>
            <div className="category-pledges-page">
              {!details || !pledge_info.length ?
                <div className="loading-spinner">
                  <ClipLoader
                    className="loading-spinner__home"
                    sizeUnit={'px'}
                    size={80}
                    color={'#123abc'}
                  />
                </div> :
                (<>
                  < BackButton {...this.props} />
                  <div className="category-container">
                    <img src={details.img} className="category-container__category-img" alt={details.name} />
                    <h1 className="category-container__category-title">{details.name}</h1>
                    <p className="category-container__category-description">{details.description}</p>
                  </div>

                  <p className="category-container__pledges">{details.name} PLEDGES</p>
                  {pledge_info.map((element, index) => {
                    return (<PledgeItem {...this.props} element={element} key={index} />)
                  }

                  )}
                  <Footer  {...this.props} />

                </>)
              }
            </div>
          </>

        )}

      </>

    )
  }
}

export default CategoryPledges

