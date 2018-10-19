const db = require('../db')
const { Item } = require('./models')

/*  title,
    url,
    commentUrl,
    commentCount,
    score,
    author,
    timeAgo*/

const testItem = {
  title: 'This story is awesome',
  url: 'https://anarchistnews.org',
  commentUrl: 'localhost:8080/',
  score: 4,
  commentCount: 23,
  author: 'notnull',
  timeAgo: 1
}
async function runSeed() {
  await db.sync({ force: true })
  console.log('db synced!')
  console.log('seeding...')
  try {
    await Item.create(testItem)
    console.log('seeded successfully')
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

runSeed()
