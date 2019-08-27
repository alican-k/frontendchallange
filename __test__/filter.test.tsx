import reducer, { initialState } from '../store/reducer'
import { load, loaded, search, sort } from '../store/actions'
import sampleData from '../server/sampleData'
import getPrograms from '../server/getPrograms'
import { filterPrograms } from '../store/selectors'

describe('Data is initialized and actions handled actions correctly', () => {
	let state;

	it('reducer initialized correctly', () => {
		const actionLoad = load('movie')
		state = reducer(initialState, actionLoad)
		expect(state).toEqual({
			programType: 'movie',
			searchTerm: null,
			sortTerm: null,
			programs: [],
			load: 'loading',
			error: false
		})
	})
	
	it('reducer loads movies correctly', () => {
		const movies = getPrograms('movie')(sampleData.entries)
		const actionLoaded = loaded(movies)
		state = reducer(state, actionLoaded)
		expect(state.programs).toHaveLength(28)
	})
	
	it('selector returns correct collection of Programs: sort by titleAsc', () => {
		let programs = filterPrograms(state.programs, '', 'titleAsc')
		let title = programs[0].title.trim()
		expect(title).toBe('A Lego Brickumentary')
		programs = filterPrograms(state.programs, '', 'titleDesc')
		title = programs[0].title.trim()
		expect(title).toBe('Victoria')
		programs = filterPrograms(state.programs, 'the', 'titleDesc')
		title = programs[0].title.trim()
		expect(title).toBe('Under The Gun')
		expect(programs).toHaveLength(8)
	})
})
