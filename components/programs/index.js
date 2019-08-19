import React from 'react'
import { View_CardList, View_InputBar } from '../styled/Views'
import Card from '../Card'
import Search from './Search'
import Sort from './Sort'

const Programs = () => 
	<>
		<View_InputBar>
			<Search />
			<Sort />
		</View_InputBar>
		<View_CardList>
			<Card title='Series Title' />
			<Card title='Series Title' />
			<Card title='Series Title' />
			<Card title='Series Title' />
			<Card title='Series Title' />
			<Card title='Series Title' />
			<Card title='Series Title' />
			<Card title='Series Title' />
			<Card title='Series Title' />
			<Card title='Series Title' />
			<Card title='Series Title' />
		</View_CardList>
	</>

export default Programs
