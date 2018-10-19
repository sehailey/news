import React, { Component } from 'react'
import axios from 'axios'
const defaultState = { stories: [] }
import { ItemList } from '../components'
class Home extends Component {
  constructor() {
    super()
    this.state = defaultState
  }

  componentDidMount = () => this.fetchStories()

  async fetchStories() {
    try {
      const res = await axios.get('/api/stories/')
      const stories = res.data
      this.setState({ stories })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const stories = this.state.stories
    return (
      <div className="stories">
        <ItemList stories={this.state.stories} />
        <button className="button-primary" onClick={this.fetchAPIMessage}>
          click me
        </button>
      </div>
    )
  }
}

export default Home
