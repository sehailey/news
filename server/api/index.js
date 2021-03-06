const router = require('express').Router()
module.exports = router
const ascii = require('./ascii')

router.use('/items', require('./items'))
router.use('/users', require('./users'))
router.use('/votes', require('./votes'))

router.get('/', async (req, res, next) => {
  try {
    res.status(201).json(ascii)
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found!!!!!!!')
  error.status = 404
  next(error)
})
