import React, { FunctionComponent } from 'react'
import { View_CardList } from '../styled/Views'
import Card from '../Card'
import { Program, LoadState } from '../../types'

interface ProgramListProps {
	programs: Program[]
	load: LoadState
	error: string
}

const ProgramList: FunctionComponent<ProgramListProps> = ({ programs, load, error }) => 
	error
		? <p>error</p>
		: load === 'loading'
			? <p>loading</p>
			: load === 'loaded' && programs.length === 0 
				? <p>no result</p>
				: (
					<View_CardList>
						{programs.map(program => {
							const {title, image: { url }} = program
							return <Card key={url} title={title} imgSource={url} />
						})}
					</View_CardList>
				)

export default ProgramList