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

export default Headline
