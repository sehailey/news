import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { ItemList, Item, SubmitItem } from './containers'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/submit" component={SubmitItem} />
        <Route exact path="/" component={ItemList} />
      </div>
    )
  }
}

export default withRouter(Routes)
