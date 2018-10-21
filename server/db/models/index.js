const Item = require('./item')
const Person = require('./person')
const Vote = require('./vote')
//const user_item = require('./user_item')

//User.belongsToMany(Project, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'userId' })

Person.belongsToMany(Item, {
  as: 'itemVotes',
  through: Vote,
  foreignKey: 'personId'
})

Item.belongsToMany(Person, {
  as: 'personVotes',
  through: Vote,
  foreignKey: 'itemId'
})

Person.hasMany(Vote, { as: 'personVotez' })
Item.hasMany(Vote, { as: 'itemVotez' })

// Person.belongsToMany(Vote)
// Vote.hasOne(Person)

module.exports = { Item, Person, Vote }
