import React, { useState } from 'react'
import { View_SearchBox } from '../styled/Views'
import { Search__Button, Search__Input } from '../styled/Misc'

const Search = ({ onSearch }) => {
	const [input, setInput] = useState('')
	
	return (
		<form onSubmit={() => onSearch(input)}>
			<View_SearchBox>
				<Search__Input 
					placeholder='Search..' 
					onChange={event => setInput(event.target.value)}
				/>
				<Search__Button 
					onClick={() => onSearch(input)}
				>
					Ara
				</Search__Button>
			</View_SearchBox>
		</form>
	)
}

export default Search