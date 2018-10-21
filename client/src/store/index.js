import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import items from './reducers/items'
import person from './reducers/person'

const reducer = combineReducers({ items, person })

const loggerMiddleware = createLogger({ collapsed: true })

let middleware
if (process.env.NODE_ENV === 'development') {
  // add `redux-logger`
  middleware = compose(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  )
} else middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware)

export default store
export * from './reducers/items'
export * from './reducers/person'
