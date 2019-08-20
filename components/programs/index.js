import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPrograms, search } from '../../store/actions'
import { View_InputBar } from '../styled/Views'
import Search from './Search'
import Sort from './Sort'
import ProgramList from './ProgramList'

const Programs = ({ fetchPrograms, search }) => {
	
	useEffect(() => {
		fetchPrograms('series')
	})
	
	return (
		<>
			<View_InputBar>
				<Search onSearch={fetchPrograms} />
				<Sort />
			</View_InputBar>

			<ProgramList />
		</>
	)
}

export default connect(
	null,
	{ fetchPrograms, search }
)(Programs)
