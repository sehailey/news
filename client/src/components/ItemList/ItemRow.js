import React from 'react'
import { connect } from 'react-redux'
import { VoteButtonContainer } from '../ItemList'

const ItemRow = props => {
  const {
    id,
    title,
    url,
    commentUrl,
    commentCount,
    commentTxt,
    score,
    author,
    timeAgo
  } = props

  return (
    <tr>
      <td>
        <VoteButtonContainer itemId={id} />
      </td>
      <td>
        <div className="row">
          <a href={url}>{title}</a>
          {` `}(<a href={url}>{url}</a>)
        </div>
        <div className="row">
          {`${score} points by ${author} ${timeAgo} | hide | `}
          <a href={commentUrl}>{commentTxt}</a>
        </div>
      </td>
    </tr>
  )
}

export default ItemRow
