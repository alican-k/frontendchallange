import React from 'react'
import styled from '@emotion/styled'
import OutsideClickHandler from 'react-outside-click-handler'
import { View_SortBox__Options } from '../../styled/Views'
import { Link_SortBox__Option} from '../../styled/Links'
import { constants } from '../../../commonStyles'

const options = [
	{label: 'Title Asc', value: 'titleAsc'},
	{label: 'Title Desc', value: 'titleDesc'},
	{label: 'Year Asc', value: 'yearAsc'},
	{label: 'Year Desc', value: 'yearDesc'},
]

const Container = styled(View_SortBox__Options)(
	({ expanded }) => expanded ? { } : { display: 'none' }
)

const OptionStyled = styled(Link_SortBox__Option)(
	({ selected }) => ({
		backgroundColor: selected ? constants.blue : constants.white,
		color: selected ? constants.whiteDarker : constants.darker,
		'&:hover': {
			opacity: selected ? 0.8 : 1,
			backgroundColor: selected ? constants.blue : constants.whiteDarker
		}
	})
)

const Options = ({ expanded, setExpanded, selectedValue, onSelect }) => 
	<OutsideClickHandler onOutsideClick={() => setExpanded(false)}>
		<Container expanded={expanded}>
			{options.map(option => {
				const selected = selectedValue === option.value
				return (
					<OptionStyled
						key={option.value}
						href='#' 
						selected={selected} 
						onClick={() => onSelect(option.value)}
					>
						{option.label}
					</OptionStyled>
				)
			})}		
		</Container>
	</OutsideClickHandler>

export default Options