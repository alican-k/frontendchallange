import {Program, ProgramType, SortType} from '../types'
import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

export const LOAD = 'LOAD'
export const LOADED = 'LOADED'
export const SEARCH = 'SEARCH'
export const SORT = 'SORT'

export type ActionNames = 'LOAD' | 'LOADED' | 'SEARCH' | 'SORT'

interface LoadAction {
	type: typeof LOAD
	payload: {
		programType: ProgramType
	}
}
interface LoadedAction { 
	type:  typeof LOADED
	payload: {
		programs: Program[]
	}
}
interface SearchAction { 
	type:  typeof SEARCH
	payload: {
		searchTerm: string
	}
}
interface SortAction {
	type: typeof SORT
	payload: {
		sortType: SortType
	}
}

export const fetchPrograms = (programType: ProgramType): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
	return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
		dispatch(load(programType))
		return fetch('http://localhost:3000/api')
			.then(response => response.json())
			.then((data) => {
				console.log('data: ', data.data.entries)
				dispatch(loaded([]))
			})
	}
}

const load = (programType: ProgramType): LoadAction => ({ 
	type: LOAD,
	payload: { programType }
})

const loaded = (programs: Program[]): LoadedAction => ({ 
	type: LOADED,
	payload: { programs }
})

export const search = (searchTerm: string): SearchAction => ({ 
	type: SEARCH,
	payload: { searchTerm }
})

export const sort = (sortType: SortType): SortAction => ({ 
	type: SORT,
	payload: { sortType }
})

export type ActionType = LoadAction | LoadedAction | SearchAction | SortAction
