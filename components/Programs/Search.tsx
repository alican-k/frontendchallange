import React, { FunctionComponent, useState } from 'react'
import { Flex } from '../styled'

interface SearchProps {
	onSearch: Function
}

const Search: FunctionComponent<SearchProps> = ({ onSearch }) => {
	const [input, setInput] = useState('')
	
	return (
			<Flex className='input input--search shadow'>
				<input 
					type='text'
					className='input--search_input'
					placeholder='Search..' 
					onChange={event => setInput(event.target.value)}
				/>
				<button
					type='button' 
					className='input--search_button'
					onClick={() => onSearch(input)}
				>
					Ara
				</button>
			</Flex>
	)
}

export default Search