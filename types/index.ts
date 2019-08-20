export type ProgramType = 'series' | 'movie'
export type SortType = 'titleAsc' | 'titleDesc' | 'yearAsc' | 'yearDesc'
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

