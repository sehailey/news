import React, { Component } from 'react'
import axios from 'axios'
import { Navbar, Home, Footer } from './components'
import Routes from './routes'
const defaultState = { ascii: `` }

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

  componentDidMount() {
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
