import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { Home, SubmitItemContainer } from './components'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/submit" component={SubmitItemContainer} />
        <Route exact path="/" component={Home} />
      </div>
    )
  }
}

export default withRouter(Routes)
