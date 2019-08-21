import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { load, search } from '../../store/actions'
import { View_InputBar } from '../styled/Views'
import Search from './Search'
import Sort from './Sort'
import ProgramList from './ProgramList'

const Programs = ({ load, search }) => {
	
	useEffect(() => {
		load('series')
	})
	
	return (
		<>
			<View_InputBar>
				<Search onSearch={search} />
				<Sort />
			</View_InputBar>

			<ProgramList />
		</>
	)
}

export default connect(
	null,
	{ load, search }
)(Programs)
