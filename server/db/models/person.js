const Sequelize = require('sequelize')
const db = require('../db')

const Person = db.define('person', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Person
