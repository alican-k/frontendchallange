import React from 'react'
import { View_SearchBox } from '../styled/Views'
import { Search__Button, Search__Input } from '../styled/Misc'

const Search = () =>
	<View_SearchBox>
		<Search__Input placeholder='Search..' />
		<Search__Button>Ara</Search__Button>
	</View_SearchBox>

export default Search