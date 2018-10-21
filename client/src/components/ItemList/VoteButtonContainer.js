import React from 'react'

const VoteButtonContainer = props => {
  const { person, itemId } = props

  if (!person) return <div />

  const vote = person.votes.find(vote => vote.itemId === id).vote

  const upVote = vote === 1 ? 'upVote' : 'noUpVote'
  const downVote = vote === -1 ? 'downVote' : 'noDownVote'

  console.log(vote, upvote, downVote)

  return (
    <div className="voteButton">
      <div
        className={`pointer arrow-up ${upVote}`}
        onClick={() => props.upVote(vote, item, person)}
      />
      <div
        className={`pointer arrow-up ${downVote}`}
        onClick={() => props.downVote(vote, item, person)}
      />
    </div>
  )
}

VoteButtonContainer.defaultProps = { vote: 0 }
export default VoteButtonContainer
