import React from 'react'

const VoteButton = props => {
  const { person, itemId } = props
  const vote = person.votes.find(vote => vote.itemId === id).vote
  const upVote = vote === 1 ? 'upVote' : 'noUpVote'
  const downVote = vote === -1 ? 'downVote' : 'noDownVote'

  return (
    <td>
      <div
        className={`pointer arrow-up ${upVote}`}
        onClick={() => props.upVote(vote, item, person)}
      />
      <div
        className={`pointer arrow-up ${downVote}`}
        onClick={() => props.downVote(vote, item, person)}
      />
    </td>
  )
}

VoteButton.defaultProps = { vote: 0 }
export default VoteButton
