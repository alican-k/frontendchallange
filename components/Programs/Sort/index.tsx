import React, { FunctionComponent, useState } from 'react'
import { Text_SmallerDarker, Text_SmallerGreyDark } from '../../styled/Texts'
import { Link_SortBox } from '../../styled/Links'
import Options, { optionMap } from './Options'
import { SortTerm } from '../../../types'

interface SortProps {
	sortTerm: SortTerm
	sort: Function
}

const Sort: FunctionComponent<SortProps> = ({ sortTerm, sort }) => {
	const [expanded, setExpanded] = useState(false)
	const sortByText = sortTerm ? `: ${optionMap[sortTerm]}` : ''
	return (
		<Link_SortBox href='#' onClick={() => setExpanded(!expanded)}>
			<Text_SmallerGreyDark>Sort By{sortByText}</Text_SmallerGreyDark>
			<Options
				selectedValue={sortTerm}
				expanded={expanded}
				setExpanded={setExpanded}
				onSelect={sort} 
			/>
		</Link_SortBox>
	)
}

export default Sort