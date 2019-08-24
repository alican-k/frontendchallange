import React, { FunctionComponent, useState } from 'react'
import Options, { optionMap } from './Options'
import { SortTerm } from '../../../types'
import { A, Flex, Span } from '../../styled'

interface SortProps {
	sortTerm: SortTerm
	sort: Function
}

const Sort: FunctionComponent<SortProps> = ({ sortTerm, sort }) => {
	const [expanded, setExpanded] = useState(false)
	const sortByText = sortTerm ? `: ${optionMap[sortTerm]}` : ''
	return (
		<A onClick={() => setExpanded(!expanded)}>
			<Flex iCenter className='input input--sort shadow'>
				<Span className='font--smallerGreyDark'>Sort By{sortByText}</Span>
				<Options
					selectedValue={sortTerm}
					expanded={expanded}
					setExpanded={setExpanded}
					onSelect={sort} 
					/>
			</Flex>
		</A>
	)
}

export default Sort