import Loader from 'react-loader-spinner'
import {Component} from 'react'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'

import './index.css'

const constantstatusApis = {
  successView: 'success',
  failureView: 'failure',
  isLoading: 'loading',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: constantstatusApis.isLoading,
  }

  componentDidMount() {
    console.log('Mount')
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok) {
      const data = await response.json()

      const last7DaysVaccination = data.last_7_days_vaccination.map(each => ({
        vaccineDate: each.vaccine_date,
        dose1: each.dose_1,
        dose2: each.dose_2,
      }))
      const vaccinationByAge = data.vaccination_by_age.map(each => ({
        age: each.age,
        count: each.count,
      }))
      const vaccinationByGender = data.vaccination_by_gender.map(each => ({
        count: each.count,
        gender: each.gender,
      }))
      this.setState({
        last7DaysVaccination,
        vaccinationByAge,
        vaccinationByGender,
        apiStatus: constantstatusApis.successView,
      })
    } else {
      this.setState({
        apiStatus: constantstatusApis.failureView,
      })
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  displayCharts = () => {
    const {
      last7DaysVaccination,
      vaccinationByGender,
      vaccinationByAge,
    } = this.state
    return (
      <div className="cardBarChart">
        <div className="barchar">
          <h1 className="textcowin">Vaccination Coverage</h1>
          <VaccinationCoverage obj={last7DaysVaccination} />
        </div>
        <div className="barchar">
          <h1 className="textcowin">Vaccination by gender</h1>
          <VaccinationByGender obj={vaccinationByGender} />
        </div>
        <div className="barchar">
          <h1 className="textcowin">Vaccination by age</h1>
          <VaccinationByAge obj={vaccinationByAge} />
        </div>
      </div>
    )
  }

  rendeFailView = () => (
    <div>
      <img
        className="imgFails"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
      <h1 className="textcowin">Something went wrong</h1>
    </div>
  )

  displayStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case constantstatusApis.isLoading:
        return this.renderLoader()
      case constantstatusApis.successView:
        return this.displayCharts()
      case constantstatusApis.failureView:
        return this.rendeFailView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-Container">
        <div className="logcard">
          <img
            className="logoLmg"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="Website logo"
          />
          <p>Co-WIN</p>
        </div>
        <h1 className="textcowin">CoWIN Vaccination in India</h1>

        {this.displayStatus()}
      </div>
    )
  }
}

export default CowinDashboard
