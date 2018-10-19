import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'

const ItemList = props => {
  const { items } = props
  return (
    <table className="story-list u-full-width">
      <tbody>{items.map(item => <Item key={item.id} {...item} />)}</tbody>
    </table>
  )
}

const mapState = state => {
  return { items: state.items }
}
export default connect(mapState)(ItemList)
