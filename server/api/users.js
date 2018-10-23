const router = require('express').Router()
const { User, Item, Vote } = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    // const user = await User.findById(1, {
    //   attributes: ['id', 'email'],
    //
    //   include: {
    //     model: Item,
    //     as: 'itemVotes',
    //     attributes: [],
    //     through: { model: Vote, attribute: ['itemId', 'votes'] }
    //   }

    // const user = await User.findById(1, {
    //   attributes: ['id', 'email']
    // })

    //const votes = await user.getItemVotes({ joinTableAttributes: ['vote'] })

    const user = await User.findById(1, {
      attributes: ['id', 'email'],
      include: [
        {
          model: Item,
          as: 'votes',
          attributes: ['id'],
          through: {
            model: Vote,
            attributes: ['itemId', 'vote']
          }
        }
      ]
    })

    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (e) {
    console.log(e)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (e) {
    console.log(e)
  }
})

router.put('/:id', async (req, res, next) => {
  const { userId, itemId, vote } = req.params
  try {
    const { userId, itemId, vote } = req.body
    const user = await User.findById(userId, {
      attributes: ['id', 'email'],

      include: {
        model: Item,
        as: 'itemVotes',
        attributes: ['id'],
        through: { model: Vote, attribute: ['itemId', 'votes'] }
      }
    })

    await user.addItemVote(itemId, { through: { vote: vote } })
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/votes', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    const userVotes = await user.getVotes({
      attributes: [],
      joinTableAttributes: ['itemId', 'vote']
    })
    res.status(201).json(userVotes)
  } catch (err) {
    next(err)
  }
})
