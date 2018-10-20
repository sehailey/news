const router = require('express').Router()
const { Person, Item, Vote } = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const person = await Person.findById(1, {
      attributes: ['email'],

      include: {
        model: Item,
        as: 'itemVotes',
        attributes: ['id'],
        through: { model: Vote, attribute: ['itemId', 'votes'] }
      }
    })

    res.status(201).json(person)
  } catch (err) {
    next(err)
  }
})
