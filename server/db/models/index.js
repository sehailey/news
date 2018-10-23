const Item = require('./item')
const User = require('./user')
const Vote = require('./vote')
const UpVote = require('./upvotes')
const DownVote = require('./downvotes')
//const user_item = require('./user_item')

//User.belongsToMany(Project, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'userId' })

User.belongsToMany(Item, {
  as: 'votes',
  through: Vote,
  foreignKey: 'userId'
})

Item.belongsToMany(User, {
  as: 'votes',
  through: Vote,
  foreignKey: 'itemId'
})
//
// User.hasMany(Vote, { as: 'userVotez' })
// Item.hasMany(Vote, { as: 'itemVotez' })
//
// User.belongsToMany(Vote)
// Vote.hasOne(User)

// User.hasMany(UpVote)
// UpVote.belongsTo(User)
// //
// User.hasMany(DownVote)
// DownVote.belongsTo(User)
//
// Item.hasMany(DownVote)
// DownVote.belongsTo(Item)
//
// Item.hasMany(UpVote)
// UpVote.belongsTo(Item)

module.exports = { Item, User, UpVote, DownVote }
