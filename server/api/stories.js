const router = require('express').Router()
const { Story } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const stories = await Story.findAll()

    res.status(201).send(stories)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const story = await Story.create(req.body)

    res.status(201).json(story)
  } catch (err) {
    next(err)
  }
})

// Serve our api message
router.get('/message', async (req, res, next) => {
  try {
    res.status(201).json({ message: 'Hello From Express!!' })
  } catch (err) {
    next(err)
  }
})
