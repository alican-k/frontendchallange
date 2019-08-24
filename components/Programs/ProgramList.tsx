import React, { FunctionComponent } from 'react'
import Card from '../Card'
import { Flex } from '../styled'
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
					<Flex wrap className='cards'>
						{programs.map(program => {
							const {title, image: { url }} = program
							return <Card key={url} title={title} imgSource={url} />
						})}
					</Flex>
				)

export default ProgramList