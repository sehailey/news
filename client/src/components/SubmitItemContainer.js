import React, { Component } from 'react'
import axios from 'axios'
import { SubmitItemForm } from '../components'

// for testing
// import {testStory} from './encrypt'
//----------------------------------------------//

const defaultState = {
  loading: true,
  submitted: false,
  url: '',
  title: '',
  text: ''
}

class SubmitItemContainer extends Component {
  constructor() {
    super()
    this.state = defaultState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.setState({ loading: false })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    const item = { url: this.state.url, title: this.state.title }

    try {
      await axios.post('/api/stories/', item).then(res => {
        console.log(res.data)
        this.setState({
          submitted: true
        })
        this.props.history.push('/home')
      })
    } catch (e) {
      console.log(e)
      this.setState({ error: e })
    }
  }

  handleChange(event) {
    const id = event.target.id
    this.setState({ [id]: event.target.value })
  }

  render() {
    return (
      <SubmitItemForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        {...this.state}
      />
    )
  }
}

//----------------------------------------------//

export default SubmitItemContainer
