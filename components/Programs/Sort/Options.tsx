import React, { FunctionComponent } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { Flex } from '../../styled'
import Option from './Option'
import cn from 'classnames'

interface OptionsProps {
	expanded: boolean
	setExpanded: Function
	selectedValue?: string
	onSelect: Function
}

const Options: FunctionComponent<OptionsProps> = ({ expanded, setExpanded, selectedValue, onSelect }) => {
	const containerClass = cn(
		'input--sort_options', 
		'shadow', 
		{
			['display-none']: !expanded
		}
	)
	return (
		<OutsideClickHandler onOutsideClick={() => setExpanded(false)}>
			<Flex column iStretch className={containerClass}>
				{options.map(option => 
					<Option 
						key={option.value} 
						selected={selectedValue === option.value}
						option={option}
						onSelect={onSelect}
					/>
				)}		
			</Flex>
		</OutsideClickHandler>
	)
}

export default Options

const options = [
	{label: 'Title Asc', value: 'titleAsc'},
	{label: 'Title Desc', value: 'titleDesc'},
	{label: 'Year Asc', value: 'yearAsc'},
	{label: 'Year Desc', value: 'yearDesc'},
]
export const optionMap = {
	titleAsc: 'Title Asc',
	titleDesc: 'Title Desc',
	yearAsc: 'Year Asc',
	yearDesc: 'Year Desc'
}