const db = require('../db')
const { Item, User, Vote } = require('./models')

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

const testUser = {
  email: 'notnull@fake.xom',
  password: '123',
  itemVotes: [{ itemId: 1, vote: 0 }]
}

async function runSeed() {
  await db.sync({ force: true })
  console.log('db synced!')
  console.log('seeding...')
  try {
    const item = await Item.create(testItem)
    const user = await User.create(testUser)

    await user.addItemVote(1, { through: { vote: 0 } })

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
