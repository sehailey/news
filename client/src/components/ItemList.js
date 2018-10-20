import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'

const ItemList = props => {
  const { items, person } = props
  if (!items || !person) return <div />

  const votes = person.votes
  if (!votes) return <div />

  const findVote = id => {
    const voteObj = votes.find(vote => (vote.id = id))
    const vote = voteObj.vote || 0
    return vote
    console.log('VOTEOBJ', voteObj)
  }

  return (
    <table className="story-list u-full-width">
      <tbody>
        {items.map(item => (
          <Item key={item.id} vote={findVote(item.id)} {...item} />
        ))}
      </tbody>
    </table>
  )
}

const mapState = state => {
  return {
    items: state.items,
    person: state.person
  }
}
export default connect(mapState)(ItemList)
