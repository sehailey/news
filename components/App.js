import React, { Component } from 'react'
import ascii from './ascii'

const defaultState = {}

class App extends Component {
  constructor() {
    super()

    this.state = defaultState
  }
  componentDidMount() {
    console.log(ascii)
  }

  render() {
    return <div className="container">Hello, world!</div>
  }
}

export default App
