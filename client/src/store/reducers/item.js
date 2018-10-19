import axios from 'axios'

// ACTION TYPES
const GOT_ALL_ITEMS = 'GOT_ALL_ITEMS'
const CREATED_ITEM = 'CREATE_ITEM'
const initialItems = []

// ACTION CREATORS
export const gotAllItems = items => ({
  type: GOT_ALL_ITEMS,
  items
})

export const createdItem = item => ({
  type: CREATED_ITEM,
  items
})

// THUNK CREATORS

export const getAllItems = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/items')
    dispatch(gotAllItems(data))
  } catch (err) {
    console.error(err)
  }
}

export const createItem = item => async dispatch => {
  try {
    const { data } = await axios.post('/api/items', item)
    dispatch(createdItem(data))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
const itemReducer = (items = initialItems, action) => {
  switch (action.type) {
    case GOT_ALL_ITEMS: {
      return action.items
    }
    case CREATED_ITEM: {
      return [...items, action.item]
    }

    default: {
      return items
    }
  }
}

export default itemReducer
