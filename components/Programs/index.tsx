import React, { FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'
import { load as loadAction, search as searchAction, sort as sortAction } from '../../store/actions'
import { filterPrograms } from '../../store/selectors'
import { View_InputBar } from '../styled/Views'
import Search from './Search'
import Sort from './Sort'
import ProgramList from './ProgramList'
import { Program, ProgramType, SortTerm, LoadState, Action } from '../../types'

interface ProgramsProps {
	programs: Program[]
	programType: ProgramType
	searchTerm: string
	sortTerm: SortTerm
	load: LoadState
	error: string
	loadAction: Function
	searchAction: Function
	sortAction: Function
}

const Programs: FunctionComponent<ProgramsProps> = 
	({ programs, programType, searchTerm, sortTerm, load, error, loadAction, searchAction, sortAction }) => {
		useEffect(() => {
			loadAction(programType)
		}, [])

		const filtered = filterPrograms(programs, searchTerm, sortTerm)

		return (
			<>
				<View_InputBar>
					<Search onSearch={searchAction} />
					<Sort sortTerm={sortTerm} sort={sortAction} />
				</View_InputBar>

				<ProgramList programs={filtered} load={load} error={error} />
			</>
		)
}

export default connect(
	({ programs, searchTerm, sortTerm, load, error }) => ({ programs, searchTerm, sortTerm, load, error }),
	{ searchAction, loadAction, sortAction }
)(Programs)
