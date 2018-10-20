import axios from 'axios'

// ACTION TYPES
const GOT_PERSON = 'GOT_PERSON'

const GOT_ALL_PEOPLE = 'GOT_ALL_PEOPLE'
const CREATED_PERSON = 'CREATE_PERSON'
const initialPeople = []

// ACTION CREATORS
export const gotAllPeople = people => ({
  type: GOT_ALL_PEOPLE,
  people
})

export const gotPerson = person => ({
  type: GOT_PERSON,
  person
})

export const createdPerson = person => ({
  type: CREATED_PERSON,
  people
})

// THUNK CREATORS

export const getAllPeople = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/people')
    dispatch(gotAllPeople(data))
  } catch (err) {
    console.error(err)
  }
}

export const createPerson = person => async dispatch => {
  try {
    const { data } = await axios.post('/api/people', person)
    dispatch(createdPerson(data))
  } catch (err) {
    console.error(err)
  }
}

export const getPerson = person => async dispatch => {
  try {
    const res = await axios.post('/api/people', person)
    const person = res.data

    person.votes = person.itemVotes.map(item => ({
      itemId: item.vote.itemId,
      vote: item.vote.vote,
      createdAt: item.vote.createdAt
    }))
    delete person.itemVotes

    dispatch(gotPerson(person))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
const personReducer = (people = initialPeople, action) => {
  switch (action.type) {
    case GOT_ALL_PEOPLE: {
      return action.people
    }
    case GOT_PERSON: {
      return action.person
    }
    case CREATED_PERSON: {
      return [...people, action.person]
    }

    default: {
      return people
    }
  }
}

export default personReducer
