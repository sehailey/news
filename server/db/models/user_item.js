const Sequelize = require('sequelize')
const db = require('../db')

const user_item = db.define('user_item', {
  vote: {
    type: Sequelize.INTEGER
  }
})

module.exports = user_item
