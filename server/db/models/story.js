const Sequelize = require('sequelize')
const db = require('../db')

/*  title,
    url,
    commentUrl,
    commentCount,
    score,
    author,
    timeAgo*/

const Story = db.define('story', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },

  commentUrl: {
    type: Sequelize.STRING
  },
  commentCount: {
    type: Sequelize.INTEGER
  },

  author: {
    type: Sequelize.STRING,
    default: 'anonymous'
  },

  timeAgo: {
    type: Sequelize.INTEGER
  },

  score: {
    type: Sequelize.INTEGER
  }
})

module.exports = Story
