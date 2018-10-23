import axios from 'axios'

// ACTION TYPES
const GOT_USER_VOTES = 'GOT_USER_VOTES'

export const gotUserVotes = userVotes => ({
  type: GOT_USER_VOTES,
  userVotes
})

export const getUserVotes = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${userId}/votes`)
    const userVotes = res.data

    dispatch(gotUserVotes(userVotes))
  } catch (err) {
    console.error(err)
  }
}

const initialVotes = []
// REDUCER
const userVotesReducer = (userVotes = initialVotes, action) => {
  switch (action.type) {
    case GOT_USER_VOTES: {
      return action.userVotes
    }

    default: {
      return userVotes
    }
  }
}

export default userVotesReducer
