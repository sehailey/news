import React, { Component } from 'react'
import axios from 'axios'
import { getAllItems, getPerson } from '../store'
import { connect } from 'react-redux'
import { ItemList } from '../components'

const defaultState = { loading: true }

class ItemListContainer extends Component {
  constructor() {
    super()

    this.state = defaultState
  }

  componentDidMount() {
    this.props.fetchItems()
    this.props.fetchPerson()
    this.setState({ loading: false })

    console.log(this.state.ascii)
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>
    return (
      <div>
        <ItemList />
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    fetchItems: () => dispatch(getAllItems()),
    fetchPerson: () => dispatch(getPerson())
  }
}

export default connect(
  null,
  mapDispatch
)(ItemListContainer)
