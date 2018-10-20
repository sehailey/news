const router = require('express').Router()
const { Person, Item, Vote } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const personVotes = await Vote.find({
      where: { personId: 1 },
      attributes: ['itemId', 'vote']
    })

    res.status(201).json(personVotes)
  } catch (err) {
    next(err)
  }
})
