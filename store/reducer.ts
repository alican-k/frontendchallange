import { LOAD, LOADED, SEARCH, SORT, ActionType } from './actions'
import { Program, LoadState } from '../types'

interface State {
	searchTerm: string
	sortType: string
	programs: Program[]
	load: LoadState
	error: boolean
}

export const initialState: State = {
	searchTerm: '',
	sortType: '',
	programs: [],
	load: 'none',
	error: false
}

const reducer = (state = initialState, action: ActionType): State => {
  switch (action.type) {
		case LOAD:{
			const load = 'loading'
			return {...state, load}
		}
		case LOADED:{
			const { programs } = action.payload
			const load = 'loaded'
			return {...state, programs, load}
		}
		case SEARCH:{
			return state
		}
		case SORT:{
			return state
		}
    default:
      return state
  }
}

export default reducer