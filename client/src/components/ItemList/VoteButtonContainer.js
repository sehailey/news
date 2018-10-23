import React from 'react'
import { connect } from 'react-redux'
import { upvote } from '../../store'
const VoteButtonContainer = props => {
  // const { user, itemId } = props
  //
  // if (!user) return <div />
  //
  // const vote = user.votes.find(vote => vote.itemId === id).vote
  const { vote } = props
  const upVote = vote === 1 ? 'upVote' : 'noUpVote'
  const downVote = vote === -1 ? 'downVote' : 'noDownVote'

  console.log(vote, upVote, downVote, props)

  return (
    <div className="voteButton">
      <div
        className={`pointer arrow-up ${upVote}`}
        onClick={() => props.upVote(props.user, props.itemId)}
      />
      <div
        className={`pointer arrow-down ${downVote}`}
        onClick={() => props.downVote()}
      />
    </div>
  )
}

VoteButtonContainer.defaultProps = { vote: 0 }

const mapState = state => {
  return {
    user: state.user
  }
}
const mapDispatch = dispatch => {
  return {
    upVote: (user, itemId) => {
      const userVote = user.votes.find(vote => (vote.itemId = itemId))
      console.log('map dispatch userId and itemId', user, itemId)
      // dispatch(upvote(userId, itemId))
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(VoteButtonContainer)
