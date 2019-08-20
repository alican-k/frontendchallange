import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer, {initialState} from './reducer'

export function initializeStore (initial = initialState) {
  return createStore(
    reducer,
    initial,
    composeWithDevTools(applyMiddleware(thunk))
  )
}