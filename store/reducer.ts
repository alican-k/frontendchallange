import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'
import { Program, LoadState, SortTerm, RootState } from '../types'

type Action = ActionType<typeof actions>

export const initialState: RootState = {
	searchTerm: '',
	sortTerm: 'none',
	programs: [],
	load: 'none',
	error: false
}

const reducer = (state = initialState, action: Action): RootState => {
  switch (action.type) {
		case getType(actions.load): {
			const load = 'loading'
			return {...state, load}
		}
		case getType(actions.loaded): {
			const programs: Program[] = action.payload as Program[]
			const load = 'loaded'
			return {...state, programs, load}
		}
		case getType(actions.search): {
			return state
		}
		case getType(actions.sort): {
			return state
		}
    default:
      return state
  }
}

export default reducer