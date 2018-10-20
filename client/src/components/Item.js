import React from 'react'
import { connect } from 'react-redux'

const Headline = props => {
  const {
    id,
    title,
    url,
    commentUrl,
    commentCount,
    score,
    author,
    timeAgo,
    vote
  } = props

  const commentTxt = commentCount > 0 ? `${commentCount} comments` : 'discuss'
  return (
    <tr>
      <td>
        <div
          className="pointer arrow-up"
          onClick={() => console.log('vote!')}
        />
        <div
          className="pointer arrow-down"
          onClick={() => console.log('vote!')}
        />
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

const mapState = state => ({ person: state.person })
export default connect(mapState)(Headline)
