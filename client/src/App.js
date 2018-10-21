import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Routes from './routes'
import { getAllItems, getPerson } from './store'
import { Navbar, Home, Footer } from './components'

const defaultState = { loading: true, error: false, ascii: `` }

class App extends Component {
  constructor() {
    super()

    this.state = defaultState
  }

  async fetchAPI() {
    try {
      const { data } = await axios.get('/api/')
      this.setState({ ascii: data })
    } catch (e) {
      console.log('something went wrong.')
    }
  }
  componentDidMount = () => {
    this.fetchAPI().then(() => console.log(this.state.ascii))
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default App
