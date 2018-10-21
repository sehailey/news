import React from 'react'
import { connect } from 'react-redux'
import { ItemRow } from '../ItemList'

const ItemList = props => {
  const { items } = props
  return (
    <table className="story-list u-full-width">
      <tbody>{items.map(item => <ItemRow key={item.id} {...item} />)}</tbody>
    </table>
  )
}

ItemList.defaultProps = { items: [] }

export default ItemList
