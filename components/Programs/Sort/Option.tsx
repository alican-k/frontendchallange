import React, { FunctionComponent } from 'react'
import { Flex, A } from '../../styled'
import cn from 'classnames'

interface OptionProps {
	option: {
		label: string
		value: string
	}
	selected: boolean
	onSelect: Function
}

const Option: FunctionComponent<OptionProps> = ({ option, selected, onSelect }) => {
	const optionCn = cn(
		'font--smallerGreyLight', 
		'input--sort_options_option',
		{
			['input--sort_options_option--selected']: selected,
			['input--sort_options_option--not-selected']: !selected,
		}
	)
	return (
		<A
			className={optionCn} 
			onClick={() => onSelect(option.value)}
		>
			{option.label}
		</A>
	)
}

export default Option