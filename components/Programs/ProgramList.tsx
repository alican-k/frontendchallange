import React, { FunctionComponent } from 'react'
import { withProps } from 'recompose'
import Card from '../Card'
import { Flex, P } from '../styled'
import { Program, LoadState } from '../../types'

const FeedBack = withProps({className: 'font--normalDarker'})(P)

interface ProgramListProps {
	programs: Program[]
	load: LoadState
	error: string
}

const ProgramList: FunctionComponent<ProgramListProps> = ({ programs, load, error }) => 
	error
		? <FeedBack>Opps! Something went wrong...</FeedBack>
		: load === 'loading'
			? <FeedBack>Loading...</FeedBack>
			: load === 'loaded' && programs.length === 0 
				? <FeedBack>There is no result based on your criteria!</FeedBack>
				: (
					<Flex wrap className='cards'>
						{programs.map(program => {
							const {title, image: { url }} = program
							return <Card key={url} title={title} imgSource={url} />
						})}
					</Flex>
				)

export default ProgramList