import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { load, search, sort } from '../../store/actions'
import { View_InputBar } from '../styled/Views'
import Search from './Search'
import Sort from './Sort'
import ProgramList from './ProgramList'

const Programs = ({ programType, searchTerm, sortTerm, load, search, sort }) => {
	
	useEffect(() => {
		load(programType)
	}, [])
	
	return (
		<>
			<View_InputBar>
				<Search onSearch={search} />
				<Sort sortTerm={sortTerm} sort={sort} />
			</View_InputBar>

			<ProgramList />
		</>
	)
}

export default connect(
	({ searchTerm, sortTerm }) => ({ searchTerm, sortTerm }),
	{ load, search, sort }
)(Programs)
