import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'
import { Program, LoadState, SortTerm, RootState } from '../types'

type Action = ActionType<typeof actions>

export const initialState: RootState = {
	programType: null,
	searchTerm: null,
	sortTerm: null,
	programs: [],
	load: null,
	error: false
}

const reducer = (state = initialState, action: Action): RootState => {
  switch (action.type) {
		case getType(actions.load): {
			const load = 'loading'
			const programType = action.payload || state.programType
			return {...state, load, programType}
		}
		case getType(actions.loaded): {
			const programs: Program[] = action.payload as Program[]
			const load = 'loaded'
			return {...state, programs, load}
		}
		case getType(actions.search): {
			const searchTerm = action.payload
			return {...state, searchTerm}
		}
		case getType(actions.sort): {
			const sortTerm: SortTerm = (action.payload as SortTerm)
			return {...state, sortTerm}
		}
    default:
      return state
  }
}

export default reducer