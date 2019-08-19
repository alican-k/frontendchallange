import React, { useState } from 'react'
import { Text_SmallerDarker, Text_SmallerGreyDark } from '../../styled/Texts'
import { Link_SortBox } from '../../styled/Links'
import Options from './Options'

const Sort = () => {
	const [expanded, setExpanded] = useState(false)
	return (
		<Link_SortBox href='#' onClick={() => setExpanded(!expanded)}>
			<Text_SmallerGreyDark>Sort By</Text_SmallerGreyDark>
			<Options
				selectedValue='option2'
				expanded={expanded}
				setExpanded={setExpanded}
				onSelect={(selectedValue) => console.log(selectedValue)} 
			/>
		</Link_SortBox>
	)
}

export default Sort