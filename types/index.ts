import * as actions from '../store/actions'
import { ActionType } from 'typesafe-actions'

export type Action = ActionType<typeof actions>

export type ProgramType = 'series' | 'movie'
export type SortTerm = 'none' | 'titleAsc' | 'titleDesc' | 'yearAsc' | 'yearDesc'
export type LoadState = 'loading' | 'loaded' | 'none' 

export interface Program {
	title: string
	description: string
	programType: ProgramType
	releaseYear: number
	images: {
		poster: {
			url: string
			width: number
			height: number
		}
	}
}

export interface RootState {
	readonly searchTerm: string
	readonly sortTerm: SortTerm
	readonly programs: Program[]
	readonly load: LoadState
	readonly error: boolean
}


