import { createStore, applyMiddleware, compose } from "redux"
import { createEpicMiddleware, combineEpics } from "redux-observable"
import { ActionType } from "typesafe-actions"
import { Action, RootState } from '../types'
import epics from "./epics"
import reducers, {initialState} from './reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = !process.env.BROWSER 
	? compose
	: (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>()

export function initializeStore(initial = initialState) {
  const middlewares = [epicMiddleware]
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  return createStore(
    reducers,
    initial,
    enhancer
  )
}

const combinedEpics = combineEpics(...epics)

export const runEpics = () => epicMiddleware.run(combinedEpics)