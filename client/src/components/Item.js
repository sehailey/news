import React from 'react'

const Headline = props => {
  const {
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
        <button onClick={() => console.log('vote!')}>+</button>
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

export default Headline
