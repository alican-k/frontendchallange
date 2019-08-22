import React, { useState } from 'react'
import { View_SearchBox } from '../styled/Views'
import { Search__Button, Search__Input } from '../styled/Misc'

const Search = ({ onSearch }) => {
	const [input, setInput] = useState('')
	
	return (
			<View_SearchBox>
				<Search__Input 
					placeholder='Search..' 
					onChange={event => setInput(event.target.value)}
				/>
				<Search__Button
					type='button' 
					onClick={() => onSearch(input)}
				>
					Ara
				</Search__Button>
			</View_SearchBox>
	)
}

export default Search