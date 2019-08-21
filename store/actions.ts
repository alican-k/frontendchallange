import { createAction } from "typesafe-actions"
import { Program } from '../types'

const LOAD = '@action/LOAD'
const LOADED = '@action/LOADED'
const SEARCH = '@action/SEARCH'
const SORT = '@action/SORT'

export const load = createAction(LOAD)

export const loaded = createAction(LOADED, action =>
	(programs: Program[]) => action(programs)
)

export const search = createAction(SEARCH, action => 
	(searchTerm: string) => action(searchTerm)
)

export const sort = createAction(SORT, action => 
	(sortTerm: string) => action(sortTerm)
)