import React, { Component } from 'react'
import axios from 'axios'
import { ItemList } from '../components'
import { connect } from 'react-redux'
import { getAllItems } from '../store'

const defaultState = { items: [] }

const ItemListContainer = props => {
  return <div className="items" />
}

const mapState = state => {
  return { items: state.items }
}

const mapDispatch = dispatch => {
  return {
    fetchItems: () => dispatch(getAllItems())
  }
}
export default connect(
  mapState,
  mapDispatch
)(ItemListContainer)
