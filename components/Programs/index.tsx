import React, { FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'
import { load as loadAction, search as searchAction, sort as sortAction } from '../../store/actions'
import { filterPrograms } from '../../store/selectors'
import Search from './Search'
import Sort from './Sort'
import ProgramList from './ProgramList'
import { Program, ProgramType, SortTerm, LoadState, Action } from '../../types'
import { Flex } from '../styled'

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
			<Flex column full>
				<Flex iCenter jBetween className='inputBar'>
					<Search onSearch={searchAction} />
					<Sort sortTerm={sortTerm} sort={sortAction} />
				</Flex>

				<ProgramList programs={filtered} load={load} error={error} />
			</Flex>
		)
}

export default connect(
	({ programs, searchTerm, sortTerm, load, error }) => ({ programs, searchTerm, sortTerm, load, error }),
	{ searchAction, loadAction, sortAction }
)(Programs)
