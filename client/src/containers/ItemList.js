import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { ItemListView } from '../components/ItemList'

const defaultState = { loading: true }

class ItemListContainer extends Component {
  constructor() {
    super()

    this.state = defaultState
  }

  componentDidMount() {
    this.props.fetchData().then(() => this.setState({ loading: false }))
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
    if (this.state.loading) this.renderLoading()
    else this.renderItemList()
  }
}

const mapState = state => ({ person: state.person, items: state.items })

const mapDispatch = dispatch => {
  return {
    fetchData: () => {
      dispatch(getAllItems())
      dispatch(getPerson())
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(ItemListContainer)
