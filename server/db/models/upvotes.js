const Sequelize = require('sequelize')
const db = require('../db')

const UpVote = db.define('upVote', {
  upVote: {
    type: Sequelize.INTEGER
  }
})

module.exports = UpVote
