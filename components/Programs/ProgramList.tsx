import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { View_CardList } from '../styled/Views'
import Card from '../Card'
import { defaultTo, pick, filter, includes, ascend, descend, prop, toLower, sort } from 'ramda'
import { compose, withProps } from 'recompose'
import { Program, LoadState } from '../../types'

interface ProgramListProps {
	filteredPrograms: Program[]
	load: LoadState
	error: string
}

const ProgramList: FunctionComponent<ProgramListProps> = ({ filteredPrograms, load, error }) => 
	error
		? <p>error</p>
		: load === 'loading'
			? <p>loading</p>
			: load === 'loaded' && filteredPrograms.length === 0 
				? <p>no result</p>
				: (
					<View_CardList>
						{filteredPrograms.map(program => {
							const {title, image: { url }} = program
							return <Card key={url} title={title} imgSource={url} />
						})}
					</View_CardList>
				)

const sortFunctions = {
	titleAsc: ascend(prop('title')),
	titleDesc: descend(prop('title')),
	yearAsc: ascend(prop('releaseYear')),
	yearDesc: descend(prop('releaseYear'))
}

const filterPred = term => compose(includes(term), toLower, prop('title'))

export default compose(
	connect(pick(['programs', 'searchTerm', 'sortTerm', 'load', 'error']), null),
	withProps(({ programs, searchTerm, sortTerm }) => {
		const searchTermLower = toLower(defaultTo('', searchTerm))
		
		const p1 = searchTerm && searchTerm.length > 2 
			? filter(filterPred(searchTermLower))(programs)
			: programs
		
		const p2 = sortTerm 
			? sort(sortFunctions[sortTerm])(p1)
			: p1

		return { filteredPrograms: p2 }
	})
)(ProgramList)