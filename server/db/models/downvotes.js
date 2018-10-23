const Sequelize = require('sequelize')
const db = require('../db')

const DownVote = db.define('downVote', {
  downVote: {
    type: Sequelize.INTEGER
  }
})

module.exports = DownVote
