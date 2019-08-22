import { converge, call, compose, take, defaultTo, pick, filter, includes, ascend, descend, prop, toLower, sort } from 'ramda'

const sortFunctions = {
	titleAsc: ascend(compose(toLower, prop('title'))),
	titleDesc: descend(compose(toLower, prop('title'))),
	yearAsc: ascend(prop('releaseYear')),
	yearDesc: descend(prop('releaseYear'))
}

const filterPred = term => compose(includes(term), toLower, prop('title'))

export const filterPrograms = ( programs, searchTerm, sortTerm ) => {
	const searchTermLower = toLower(defaultTo('', searchTerm))
	
	const p1 = searchTerm && searchTerm.length > 2 
		? filter(filterPred(searchTermLower))(programs)
		: programs
	
	const p2 = sortTerm 
		? sort(sortFunctions[sortTerm])(p1)
		: p1

	return take(21)(p2)
}