import React from 'react'
import { connect } from 'react-redux'

const Item = props => {
  // const { person, items, upVote, downVote } = props
  //
  // const vote = person.votes.find(vote => vote.itemId === id).vote
  // const upVote = vote === 1 ? 'upVote' : 'noUpVote'
  // const downVote = vote === -1 ? 'downVote' : 'noDownVote'
  //
  // const commentTxt = commentCount > 0 ? `${commentCount} comments` : 'discuss'

  return <ItemRow {...props} />
}

const mapState = state => ({ person: state.person, items: state.items })

const mapDispatch = dispatch => ({
  upVote: (vote, item, person) => {
    if (vote < 1) dispatch(personUpvote(person, item))
  },

  downVote: (vote, item, person) => {
    if (vote > -1) dispatch(personDownvote(person, item))
  }
})

export default connect(
  mapState,
  mapDispatch
)(Item)
