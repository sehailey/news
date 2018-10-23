import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { ItemListView } from '../components/ItemList'
import { getUser, getAllItems, getUserVotes } from '../store'

const defaultState = { loading: true }

class ItemListContainer extends Component {
  constructor() {
    super()

    this.state = defaultState
  }

  componentDidMount() {
    this.props.fetchData()
    this.setState({ loading: false })

    console.log('ItemListContainer mounted')
  }
  renderLoading() {
    return <div>loading...</div>
  }

  renderErorr() {
    return <div>sorry, please try again...</div>
  }

  renderItemList() {
    return <ItemListView items={this.props.items} />
  }

  render() {
    if (this.state.loading) return this.renderLoading()
    else if (this.props.items) return this.renderItemList()
    else return this.renderError()
  }
}

const mapState = state => ({ user: state.user, items: state.items })

const mapDispatch = dispatch => {
  return {
    fetchData: () => {
      dispatch(getAllItems())
      dispatch(getUser())
      dispatch(getUserVotes())
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(ItemListContainer)
