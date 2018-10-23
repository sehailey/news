const Item = require('./item')
const User = require('./user')
const Vote = require('./vote')
//const user_item = require('./user_item')

//User.belongsToMany(Project, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'userId' })

User.belongsToMany(Item, {
  as: 'itemVotes',
  through: Vote,
  foreignKey: 'userId'
})

Item.belongsToMany(User, {
  as: 'userVotes',
  through: Vote,
  foreignKey: 'itemId'
})

User.hasMany(Vote, { as: 'userVotez' })
Item.hasMany(Vote, { as: 'itemVotez' })

// Person.belongsToMany(Vote)
// Vote.hasOne(Person)

module.exports = { Item, User, Vote }
