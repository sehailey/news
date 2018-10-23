import axios from 'axios'

// ACTION TYPES
const GOT_USER = 'GOT_USER'

const GOT_ALL_USERS = 'GOT_ALL_USERS'
const CREATED_USER = 'CREATE_USER'
const USER_UPVOTED = 'USER_UPVOTED'
const USER_DOWNVOTED = 'USER_DOWNVOTED'

const initialUsers = []

// ACTION CREATORS
export const gotAllUsers = users => ({
  type: GOT_ALL_USERS,
  users
})

export const gotUser = user => ({
  type: GOT_USER,
  user
})

export const createdUser = user => ({
  type: CREATED_USER,
  users
})

export const userUpVoted = user => ({
  type: USER_UPVOTED,
  user
})

export const userDownVoted = (user, itemId) => ({
  type: USER_DOWNVOTED,
  user
})

// THUNK CREATORS

export const getAllUsers = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/users')
    dispatch(gotAllUsers(data))
  } catch (err) {
    console.error(err)
  }
}

export const createUser = user => async dispatch => {
  try {
    const { data } = await axios.post('/api/users', user)
    dispatch(createdUser(data))
  } catch (err) {
    console.error(err)
  }
}

export const getUser = user => async dispatch => {
  try {
    const res = await axios.post('/api/users', user)
    const user = res.data

    dispatch(gotUser(user))
  } catch (err) {
    console.error(err)
  }
}

export const upvote = (userId, itemId, vote) => async dispatch => {
  try {
    const res = await axios.put(`/api/users/${userId}`, userId, itemId, vote)
    const user = await res.data
    console.log(user)
    dispatch(userUpVoted(user))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
const userReducer = (users = initialUsers, action) => {
  switch (action.type) {
    case GOT_ALL_USERS: {
      return action.users
    }
    case GOT_USER: {
      return action.user
    }
    case CREATED_USER: {
      return [...users, action.user]
    }

    case USER_UPVOTED: {
      return action.user
    }

    default: {
      return users
    }
  }
}

export default userReducer
