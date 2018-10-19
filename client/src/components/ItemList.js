import React from 'react'
import Item from './Item'

const StoryList = props => {
  const { stories } = props
  return (
    <table className="story-list u-full-width">
      <tbody>{stories.map(story => <Item key={story.id} {...story} />)}</tbody>
    </table>
  )
}

export default StoryList
